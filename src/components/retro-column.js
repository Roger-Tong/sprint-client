import React from 'react';

import ItemForm from './item-form';
import ItemList from './item-list';
import { Socket } from './constants';


export default class RetroColumn extends React.Component {
	
	constructor() {
		super();
		
		const self = this;
		
		Socket.on('items', function(items) {
			self._refreshItems(items.unreadItems, items.readItems);
		});
		
		this.state = {
			unreadItems: [],
			readItems: []
		};
	}
	
	render() {
		return (
			<div className="cell">
				<h2>{this.props.name}</h2>
				<ItemForm addToUnread={this._addToUnread.bind(this)} />
				<ItemList type="unread" items={this.state.unreadItems} switchStatus={this._markRead.bind(this)} />
				<ItemList type="read" items={this.state.readItems} switchStatus={this._markUnread.bind(this)} />
			</div>
		);
	}
	
	_refreshItems(unreadItems, readItems) {
		this.setState({unreadItems: unreadItems, readItems: readItems});
	}
	
	_addToUnread(content) {
		Socket.emit('add an unread item', content);
		// this.setState({unreadItems: this.state.unreadItems.concat([content])});
	}
	
	_markRead(item) {
		Socket.emit('mark an unread item as read', item);
	}
	
	_markUnread(item) {
		Socket.emit('mark a read item as unread', item);

	}
}