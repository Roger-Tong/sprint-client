import React from 'react';

export default class ItemForm extends React.Component {
	
	render() {
		return (
			<div className="comment-box" onSubmit={this._handleSubmit.bind(this)}>
				<form className="comment-form">
					<label>New Item</label>
					<div className="comment-form-fields">
						<textarea placeholder="Item: " ref={c => this._content = c}></textarea>
					</div>
					
					<div className="comment-form-actions">
						<button type="submit">Post Item</button>
					</div>
				</form>
			</div>
		);
	}
	
	_handleSubmit(event) {
		event.preventDefault();
		this.props.addToUnread(this._content.value);
		
		this._content.value = '';
	}
}