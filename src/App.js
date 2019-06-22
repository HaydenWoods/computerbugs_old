import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from "./Components/Main.js";
import About from "./Components/About.js";
import Support from "./Components/Support.js";
import Contact from "./Components/Contact.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faBug, faWrench, faBook, faDesktop, faUser, faWifi, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone,faWrench,faBook,faUser,faWifi,faPlus,faBug,faDesktop);

class App extends Component {
	render() {
		return (
			<Router className="router">
				<div className="router-container">
					<Switch>
						<Route exact path="/" component={ Main }/>
						<Route exact path="/about" component={ About }/>
						<Route exact path="/support" component={ Support }/>
						<Route exact path="/contact" component={ Contact }/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;