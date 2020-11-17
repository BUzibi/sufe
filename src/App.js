import React, { Component } from 'react';
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Postgraduate from './components/Postgraduate/Postgraduate';
import Search from './components/Search/Search';
import Master from './components/Master/Master';
import Potrait from './components/Potrait/Potrait';
import User from './components/User/User';
import Article from './components/Article/Article';


export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/experience">
							<Experience />
						</Route>
						<Route path="/postgraduate">
							<Postgraduate />
						</Route>
						<Route path="/search">
							<Search />
						</Route>
						<Route path="/master">
							<Master />
						</Route>
						<Route path="/potrait">
							<Potrait />
						</Route>
						<Route path="/user">
							<User />
						</Route>
						<Route path="/article/:id">
							<Article />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}
