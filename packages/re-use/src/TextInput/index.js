import React from 'react'

class TextInput extends React.Component {

	handleChange(event) {

		if (typeof this.props.setModel !== "undefined" ) {
			this.props.setModel(event.target.value)
		}
	}

	render(){
		return (
			<input placeholder={this.props.helper} type={this.props.type} style={{textAlign: 'center'}} onChange={this.handleChange.bind(this)} />
		)
	}
}
export default TextInput;
