import React from 'react'
import Header from './header'
import ACTIONS from '../actions'

const LoginView = React.createClass({
	 render: function() {
	 	return (
	 		<div className={'login-view'} >
	 			<Header />
	 			<RegisterForm />
	 			<LoginForm />
	 		</div>
	 	)
 	}
})

const RegisterForm = React.createClass({

	_registerUser: function(eventObj) {
		eventObj.preventDefault()
		var formEl = eventObj.target
		console.log(formEl.email.value, formEl.password.value)
		ACTIONS.register({
			email: formEl.email.value,
			password: formEl.password.value
		})
	},

	render: function() {
		return (
			<form onSubmit={this._registerUser}>
				<h3>register</h3>
				<input name="email" placeholder="enter your email" />
				<input name="password" placeholder="enter a password" type="password" />
				<button type="submit">register!</button>
			</form>
			)
	}
})

const LoginForm = React.createClass({

	_logUserIn: function(eventObj) {
		eventObj.preventDefault()
		ACTIONS.login({
			email: eventObj.target.email.value,
			password: eventObj.target.password.value
		})
	},

	 render: function() {
	 	return (
			<form onSubmit={this._logUserIn}>
				<h3>log in</h3>
				<input name="email" placeholder="enter your email" />
				<input name="password" placeholder="enter a password" type="password" />
				<button type="submit">log in!</button>
			</form>
	 	)
 	}
})


export default LoginView
