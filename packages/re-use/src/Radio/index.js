import React from 'react'
import PropTypes from 'prop-types'

import UUID from 'node-uuid'


class Radio extends React.Component {
	componentDidMount(){
		this.id = UUID.v4()
	}

	render() {
		return (<div> 
			<input type="radio" id={this.id} onChange={this.props.onChange.bind(this)} name={this.props.group} />
			<label htmlFor={this.id}> {this.props.text} </label>
		</div>)	
	}
}

Radio.propTypes = {
  group: PropTypes.string.isRequired,
}

export default Radio
