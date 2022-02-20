import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home.js';
import Users from './components/Users.js';
import Masters from './components/Masters';
import Applications from './components/Applications';
import Students from './components/Students';
import Instructors from './components/Instructors';
import Secretaries from './components/Secretary';

import { Routes, Route, Link } from 'react-router-dom';



function App(){
	return(
		<div className="App">
			<h1>Rest Project</h1>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/users" element={<Users />} />
				<Route exact path="/masters" element={<Masters />} />
				<Route exact path="/applications" element={<Applications />} />
				<Route exact path="/students" element={<Students />} />
				<Route exact path="/instructors" element={<Instructors />} />
				<Route exact path="/secretary" element={<Secretaries />} />
			</Routes>
		</div>
	);
}

export default App;