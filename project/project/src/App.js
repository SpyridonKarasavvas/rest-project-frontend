import React from 'react';
import logo from './logo.svg';
import './App.css';

import Protected from './components/Protected';
import Login from './Login';
import Home from './components/Home';
import Users from './components/Users';
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
				<Route path="/" exact element={<Login />} />
				<Route path="/login" exact element={<Login />} />
				<Route element={<Protected />}>
					<Route path="/home" exact element={<Home />} />
					<Route path="/users" exact element={<Users />} />
					<Route path="/masters" exact element={<Masters />} />
					<Route path="/applications" exact element={<Applications />} />
					<Route path="/students" exact element={<Students />} />
					<Route path="/instructors" exact element={<Instructors />} />
					<Route path="/secretary" exact element={<Secretaries />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;