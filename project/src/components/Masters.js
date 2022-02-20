import axios from 'axios';

const React = require('react'); 
const ReactDOM = require('react-dom');

class Masters extends React.Component {

	constructor(props) {
		super(props);
		this.state = {masters: []};
	}

	componentDidMount() {
		axios.get('http://localhost:9090/master')
    	.then(response => this.setState({masters: response.data._embedded.masters}));
	}

	render() {
		return (
			<EmployeeList masters={this.state.masters}/>
		)
	}
}

class EmployeeList extends React.Component{
	render() {
		const masters = this.props.masters.map(master =>
			<Employee key={master._links.self.href} master={master}/>
		);
		return (
			<div>
				<h2>Masters List</h2>
				<table>
					<tbody>
						<tr>
							<th>Master's ID</th>
							<th>Title</th>
							<th>Context</th>
							<th>Criteria</th>
							<th>Field</th>
						</tr>
						{masters}
					</tbody>
				</table>
			</div>
		)
	}
}

class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.master.id}</td>
				<td>{this.props.master.title}</td>
				<td>{this.props.master.context}</td>
				<td>{this.props.master.criteria}</td>
				<td>{this.props.master.field}</td>
			</tr>
		)
	}
}


export default Masters;