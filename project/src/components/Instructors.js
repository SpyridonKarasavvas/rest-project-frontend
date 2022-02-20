import axios from 'axios';

const React = require('react'); 
const ReactDOM = require('react-dom');

class Instructors extends React.Component {

	constructor(props) {
		super(props);
		this.state = {instructors: []};
	}

	componentDidMount() {
		axios.get('http://localhost:9090/instructor')
    	.then(response => this.setState({instructors: response.data._embedded.instructors}));
	}

	render() {
		return (
			<EmployeeList instructors={this.state.instructors}/>
		)
	}
}

class EmployeeList extends React.Component{
	render() {
		const instructors = this.props.instructors.map(instructor =>
			<Employee key={instructor._links.self.href} instructor={instructor}/>
		);
		return (
			<div>
				<h2>Instructor List</h2>
				<table>
					<tbody>
						<tr>
							<th>Username</th>
							<th>Password</th>
							<th>Enabled</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email Address</th>
							<th>Field of Study</th>
						</tr>
						{instructors}
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
				<td>{this.props.instructor.username}</td>
				<td>{this.props.instructor.password}</td>
				<td>{this.props.instructor.enabled.toString()}</td>
                <td>{this.props.instructor.firstname}</td>
				<td>{this.props.instructor.lastname}</td>
				<td>{this.props.instructor.email}</td>
                <td>{this.props.instructor.field}</td>
			</tr>
		)
	}
}


export default Instructors;