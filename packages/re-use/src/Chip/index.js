import React from 'react'

const Chip = ({children, pointer, onClick, active, textColor}) => (
  <div className={`chip ${active ? 'blue' : ''} ${textColor? `${textColor}-text` :``}`} onClick={onClick && onClick.bind(this)} style={
			    	{
			    		cursor:'pointer',
			    		WebkitTouchCallout: 'none',
						WebkitUserSelect: 'none',
						KhtmlUserSelect: 'none',
						MozUserSelect: 'none',
						msUserSelect: 'none',
						userSelect: 'none',
						fontFamily: "Courier New",
						fontWeight: 'bold'
					}}>
   	{children}
  </div>
)

export default Chip