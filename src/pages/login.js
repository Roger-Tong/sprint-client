import React from 'react';
import { hashHistory } from 'react-router';

import { Socket } from '../components/constants';

export default class Login extends React.Component {
	
	constructor() {
		super();
		
		if(localStorage.getItem('user')) {
			hashHistory.push('/retro');
		}
	}
	
	render() {
		return (
			<div className="comment-box">
				<form className="comment-form" onSubmit={this._handleLogin.bind(this)}>
					<label>Login</label>
					<div className="comment-form-fields">
						<input placeholder="Your nickname: " ref={c => this._content = c}></input>
					</div>
					<div className="comment-form-actions">
						<button type="submit">Join</button>
					</div>
				</form>
			</div>
		);
	}
	
	_handleLogin(event) {
		event.preventDefault();
		
		Socket.emit('login', this._content.value);
		localStorage.setItem('user', this._content.value);
		hashHistory.push('/retro');
	}
}