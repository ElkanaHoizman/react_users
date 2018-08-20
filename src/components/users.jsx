import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './users.css';
let sectionStyle = {
	width: '35 %'
};
let gender = {
	'font-size': '36px'
};

class Users extends Component {
	state = {
		number: '',
		storage: ''
	};

	get = () => {
		const num = document.getElementById('number').value;
		fetch(`https://randomuser.me/api/?results=${num}`)
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				console.log(myJson);
				this.setState({ number: myJson });
			});
	};
	Storage = (u,p)=>{
		let user = { 'username': u, 'password': p };
		// Put the object into storage
		localStorage.setItem('user', JSON.stringify(user));
	
	}
	render() {
		let api = this.state.number.results;
		return (
			<div className="container " >
				<label htmlFor="number">Enter Number</label>
				<input type="number" className="form-control col-5" id="number" placeholder="Enter number" required />
				<br />
				<button onClick={this.get} type="submit" className="btn btn-primary col-5">
					Submit
				</button>
				<p />
				{this.state.number !== '' ? (
					Object.keys(this.state.number.results).map((item, i) => (
						<ul className="  list-group col-md-3 col-sm-3 " id="search"  key={i}>
							<li className="list-group-item">
								<Link to='/login' onClick={() => this.Storage(`${api[item].login.username}`,`${api[item].login.password}`)}>
									<img style={sectionStyle} src={`${api[item].picture.large}`} />
									<p><b>First Name:</b>{`${api[item].name.first}`}</p>
									<p><b>Last Name:</b>
										{`${api[item].name.last}`}
									</p>
									<p ><b>Gender:</b>
										{`${api[item].gender}`}
									</p>
									{`${api[item].gender}` == 'male' ? (
										<p>{<i class="fa fa-male" style={gender} />}</p>
									) : (
										<p>{<i class="fa fa-female" style={gender} />}</p>
									)}
								</Link>
							</li>
						</ul>
					))
				) : null}
			</div>
		);
	}
}

export default Users;
