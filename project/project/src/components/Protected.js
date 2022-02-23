import Login from "../Login";

import { Navigate, Outlet} from "react-router-dom";


// function Protected({ component: Component, ...restOfProps }) {
//     const isAuthenticated = localStorage.getItem("isAuthenticated");
//     console.log("this", isAuthenticated);

    
//     return (
//         <Switch
//           {...restOfProps}
//           render={(props) =>
//             isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
//           }
//         />
//       );

//   }

function Protected({ component: Component, ...restOfProps }) {

    var key = (localStorage.getItem("isAuthenticated") === 'true');

    const useAuth = () => {
        const user = { loggedIn: key };
        return user && user.loggedIn;
    };

    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to= "/" />
    
}

export default Protected;