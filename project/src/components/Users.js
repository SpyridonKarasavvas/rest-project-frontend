import axios from 'axios';

const React = require('react'); 
const ReactDOM = require('react-dom');

class Users extends React.Component {

	constructor(props) {
		super(props);
		this.state = {users: []};
	}

	componentDidMount() {
		axios.get('http://localhost:9090/user')
    	.then(response => this.setState({users: response.data._embedded.authorities}));
	}

	render() {
		return (
			<EmployeeList users={this.state.users}/>
		)
	}
}

class EmployeeList extends React.Component{
	render() {
		const users = this.props.users.map(user =>
			<Employee key={user._links.self.href} user={user}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Username</th>
						<th>Password</th>
						<th>Enabled</th>
					</tr>
					{users}
				</tbody>
			</table>
		)
	}
}

class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.user.username}</td>
				<td>{this.props.user.password}</td>
				<td>{this.props.user.enabled.toString()}</td>
			</tr>
		)
	}
}


export default Users;