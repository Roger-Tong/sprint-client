import React from 'react';

export default class ItemList extends React.Component {
	render() {
		const items = this.props.items || [];
		return (
			<div className="comment-list">
				<h3 className="comment-count">{this.props.type}</h3>
				<div className="comment">
					{items.map((item, i) => {
						return (
							<a className="comment-header" key={i} href="#" onClick={this._switchStatus.bind(this)}>{item}</a>
						)
					})}
				</div>
			</div>
		);
	}
	
	_switchStatus(event) {
		event.preventDefault();
		this.props.switchStatus(event.target.text);
	}
}