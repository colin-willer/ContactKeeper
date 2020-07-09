import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [ user, setUser ] = useState({
		email: '',
		password: ''
	});

	const { email, password } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('Login Submitted');
	};

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Login</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input type="email" name="email" value={email} onChange={onChange} required />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password </label>
					<input type="password" name="password" value={password} onChange={onChange} required />
				</div>
				<input type="submit" value="Login" className="btn btn-primary btn-block" />
				<p className="text-center">
					New to ContackKeeper? <Link to="/register">Register New Account</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
