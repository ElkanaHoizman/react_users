import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import $ from 'jquery'; 
import Login from './login';
import Users from './users';
$(document).ready(function () {
	$("#myInput").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#search ").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});
class NavBar extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<nav id="nav" className="navbar  bg-dark ">
					
						<Link to="/users" className="navbar-brand ">Users</Link>
						<Link to="/login" hidden>login</Link>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
							aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<from className="form-inline my-2 my-lg-0 ">
							<input type="search" id="myInput" className="form-control mr-sm-2" placeholder="Search" aria-label="Search" />
						</from>
					
						
  </nav>
					
					<Route exact path="/" component={Users} />
					<Route path="/login" component={Login } />
					<Route path="/users" component={Users} />
				</div>
			</BrowserRouter>
		);
	}
}

export default NavBar;
