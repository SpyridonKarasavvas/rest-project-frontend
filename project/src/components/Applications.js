import axios from 'axios';

const React = require('react'); 
const ReactDOM = require('react-dom');

class Applications extends React.Component {

	constructor(props) {
		super(props);
		this.state = {applications: []};
	}

	componentDidMount() {
		axios.get('http://localhost:9090/application')
    	.then(response => this.setState({applications: response.data._embedded.applications}));
	}

	render() {
		return (
			<ApplicationList applications={this.state.applications}/>
		)
	}
}

class ApplicationList extends React.Component{
	render() {
		const applications = this.props.applications.map(application =>
			<Application key={application._links.self.href} application={application}/>
		);
		return (
			<div>
				<h2>Application List</h2>
				<table>
					<tbody>
						<tr>
							<th>Application ID</th>
							<th>State</th>
							<th>Criteria</th>
							<th>Ranking</th>
						</tr>
						{applications}
					</tbody>
				</table>
			</div>
		)
	}
}

class Application extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.application.id}</td>
				<td>{this.props.application.state}</td>
				<td>{this.props.application.criteria.toString()}</td>
				<td>{this.props.application.ranking}</td>
			</tr>
		)
	}
}


export default Applications;