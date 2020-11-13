import React, { Component } from 'react';
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
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
						<Route path="/about">
							<About />
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
