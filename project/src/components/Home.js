import React from 'react'
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div>
            <h2>Welcome Admin</h2>

            <menu>
                <li><Link to="/users">Show User List </Link></li>
                <li><Link to="/masters">Show Master List </Link></li>
                <li><Link to="/applications">Show Application List </Link></li>
                <li><Link to="/students">Show Student List </Link></li>
                <li><Link to="/instructors">Show Instructor List </Link></li>
                <li><Link to="/secretary">Show Secretary </Link></li>
            </menu>
        </div>
    )
}

export default Home;