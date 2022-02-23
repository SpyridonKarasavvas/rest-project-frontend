import axios from 'axios';

const React = require('react'); 
const ReactDOM = require('react-dom');

class Students extends React.Component {

	constructor(props) {
		super(props);
		this.state = {students: []};
	}

	componentDidMount() {
		axios.get('http://localhost:9090/student')
    	.then(response => this.setState({students: response.data._embedded.students}));
	}

	render() {
		return (
			<EmployeeList students={this.state.students}/>
		)
	}
}

class EmployeeList extends React.Component{
	render() {
		const students = this.props.students.map(student =>
			<Employee key={student._links.self.href} student={student}/>
		);
		return (
			<div>
				<h2>Student List</h2>
				<table>
					<tbody>
						<tr>
							<th>Username</th>
							<th>Password</th>
							<th>Enabled</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email Address</th>
							<th>Degree Title</th>
							<th>Degree Grade</th>
							<th>Preference</th>
							<th>Recommendation</th>
						</tr>
						{students}
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
				<td>{this.props.student.username}</td>
				<td>{this.props.student.password}</td>
				<td>{this.props.student.enabled.toString()}</td>
                <td>{this.props.student.firstname}</td>
				<td>{this.props.student.lastname}</td>
				<td>{this.props.student.email}</td>
                <td>{this.props.student.degreeTitle}</td>
                <td>{this.props.student.degreeGrade}</td>
				<td>{this.props.student.preference}</td>
				<td>{this.props.student.recommendation}</td>
			</tr>
		)
	}
}


export default Students;