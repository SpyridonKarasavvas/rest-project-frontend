import React, { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';


// class LoginComponent extends Component {

//     constructor(props) {

//         super(props)

//         this.state = {
//             username: '',
//             password: '',
//             hasLoginFailed: false,
//             showSuccessMessage: false
//         }

//         this.handleChange = this.handleChange.bind(this)
//         this.loginClicked = this.loginClicked.bind(this)
//     }

//     handleChange(event) {
//         this.setState(
//             {
//                 [event.target.name]
//                     : event.target.value
//             }
//         )
//     }

//     loginClicked() {

//         if(this.state.username==='user' && this.state.password==='dummy'){
//             this.props.navigate(`/home`)
//         }
//         else {
//              this.setState({showSuccessMessage:false})
//              this.setState({hasLoginFailed:true})
//         }
//     }
    

//     render() {
//         return (
//             <div>
//                 <h3>Log in to continue</h3>
//                 <div className="container">
//                     {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials<br></br></div>}
//                     {this.state.showSuccessMessage && <div>Login Sucessful</div>}
//                     Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
//                     <br></br>Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
//                     <br></br><button className="btn btn-success" onClick={this.loginClicked}>Login</button>
//                 </div>
//             </div>
//         );
//     }
// }

// function Login(props) {
//     let navigate = useNavigate();
//     return <LoginComponent {...props} navigate={navigate} />
// }


// export default Login

const Login = () => {

    const getUserList = async () => {
      return axios.get('http://localhost:9090/user');
    };
      

    const [userData, setUserData] = useState({ username: "", password: ""});
    const [errorMessage, setErrorMessage] = useState({ value: ""});

    const handleInputChange = (e) => {
        setUserData((prevState) => {
          return {
            ...prevState,
            [e.target.name]: e.target.value,
          };
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();

        var users = await getUserList().then(response => {return response.data._embedded.authorities}).catch(err => console.error(err));
    	  // .then(response => response.data._embedded.authorities)
        // .catch(err => console.error(err));

        console.log(users)

        console.log(userData.username)
        console.log(userData.password)
    
        //if username or password field is empty, return error message
        if (userData.username === "" || userData.password === "") {
          setErrorMessage((prevState) => ({
            value: "Empty username/password field",
          }));
          localStorage.setItem("isAuthenticated", "false");
    
        } else {
            for(var i = 0; i < users.length; i++) {
              var obj = users[i];
              if ((String(userData.username.toLowerCase()) == String(obj.username)) && (String(userData.password) === String(obj.password))){
                localStorage.setItem("isAuthenticated", "true");
                window.location.pathname = "/home";
                console.log(obj.username)
                console.log(obj.password)
                break;
              } else {
                setErrorMessage((prevState) => ({
                  value: "Incorrect Credentials!",
                }));
                localStorage.setItem("isAuthenticated", "false");
              }
            }

        } //else {
        //   //If credentials entered is invalid
        //   setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
        //   localStorage.setItem("isAuthenticated", "false");
        //   return;
        // }
      };
    
      //if (userData.username.toLowerCase() === "admin" && userData.password === "123456") 

      return (
        <div className="text-center">
          <h2>Please Log in</h2>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="form-group">
              <label>Username: </label>
              <input
                className="form-control"
                type="text"
                name="username"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <br />
            <br />
            <div className="form-group">
              <label>Password: </label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <br />
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
    
            {errorMessage.value && (
              <p className="text-danger"> {errorMessage.value} </p>
            )}
          </form>
        </div>
      );
}

export default Login

