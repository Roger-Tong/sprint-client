import React from 'react'
import { Link } from 'react-router';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<div className="top-menu">
					<ul>
						<li><Link to="/planning">planning</Link></li>
						<li><Link to="/grooming">grooming</Link></li>
						<li><Link to="/retro">retro</Link></li>
					</ul>
				</div>
				
				{this.props.children}
			</div>
		);
	}
}