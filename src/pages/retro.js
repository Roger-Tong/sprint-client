import React from 'react';

import RetroColumn from '../components/retro-column';
import UserList from '../components/user-list';

export default class RetroPage extends React.Component {
	render() {
		return (
			<div className="row comments-container">
				<UserList />
				<RetroColumn name="Good Points"/>
			</div>
		);
	}
}