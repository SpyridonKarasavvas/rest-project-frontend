import axios from 'axios';

const React = require('react'); 
const ReactDOM = require('react-dom');

class Secretaries extends React.Component {

	constructor(props) {
		super(props);
		this.state = {secretaries: []};
	}

	componentDidMount() {
		axios.get('http://localhost:9090/secretary')
    	.then(response => this.setState({secretaries: response.data._embedded.secretaries}));
	}

	render() {
		return (
			<SecretaryList secretaries={this.state.secretaries}/>
		)
	}
}

class SecretaryList extends React.Component{
	render() {
		const secretaries = this.props.secretaries.map(secretary =>
			<Secretary key={secretary._links.self.href} secretary={secretary}/>
		);
		return (
			<div>
				<h2>Secretary List</h2>
				<table>
					<tbody>
						<tr>
							<th>Username</th>
							<th>Password</th>
							<th>Enabled</th>
						</tr>
						{secretaries}
					</tbody>
				</table>
			</div>
		)
	}
}

class Secretary extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.secretary.username}</td>
				<td>{this.props.secretary.password}</td>
				<td>{this.props.secretary.enabled.toString()}</td>
			</tr>
		)
	}
}


export default Secretaries;