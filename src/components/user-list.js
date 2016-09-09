import React from 'react';
import { Socket } from './constants'

export default class UserList extends React.Component {
	constructor() {
		super();
		const self = this;
		
		Socket.on('users', function(users) {
			self._refreshUsers(users);
		});
		
		this.state = {users: []};
	}
	
	render() {
		return (
			<div className="user-list">
				<h3 className="user-list-header">Current Users</h3>
				<div className="user-list-content">
					{this.state.users.map((user, i) => {
						if(localStorage.getItem('user') === user) {
							return (<p className='user-name current-user' key={i}>{user}</p>);
						} else {
							return (<p className='user-name' key={i}>{user}</p>);
						}
					})}
				</div>
			</div>
		);
	}
	
	_refreshUsers(users) {
		this.setState({users: users});
	}
}