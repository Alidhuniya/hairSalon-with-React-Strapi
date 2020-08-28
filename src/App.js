import React, { Component, Fragment } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from './components/Error';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import { Route, Switch } from "react-router-dom";




class App extends Component {
	render() {
		return (
			<Fragment>
			<div className = "navbar">
				<Navbar />

				</div>

				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>

					<Route path="/about" exact>
						<About />
					</Route>

					<Route path="/services" exact>
						<Services />
					</Route>

					<Route path="/portfolio" exact>
						<Portfolio />
					</Route>

					<Route path="/contact" exact>
						<Contact />
					</Route>

					<Route path="/book" exact>
						<Book />
					</Route>

					<Route>
						<Error />
					</Route>
				</Switch>

				<Footer />
			</Fragment>
		);
	}
}

export default App;
