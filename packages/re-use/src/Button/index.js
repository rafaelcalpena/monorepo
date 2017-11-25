import React from 'react'

const Button = ({text, onClick, disabled, flat, textColor, backgroundColor, customStyle}) => (
	<a className={`waves-effect waves-light btn${(flat) ? '-flat': ''} ${(disabled) ? 'disabled' : ''} ${(textColor) ? textColor :''} ${(backgroundColor) ? backgroundColor :''}`} style={customStyle} onClick={onClick}>
        {text}
    </a>
)

export default Button
