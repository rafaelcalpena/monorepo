import React from 'react'

const Card = ({title, action, children, classes = "grey lighten-2", expanded, collapsed, use, onToggle, onClick}) => {

  return  <div className={`card ${classes}`} onClick={onClick && onClick.bind(this)}>
    <div className="card-content" style={{minHeight: use === 'expanded' ? '150px': ''}}>
      {title ? <span className="card-title">{title}
			<span className="right"> {collapsed ? (
			    <i className="large material-icons" style={
			    	{
			    		fontSize:'1.5em',
			    		cursor:'pointer',
			    		WebkitTouchCallout: 'none',
						WebkitUserSelect: 'none',
						KhtmlUserSelect: 'none',
						MozUserSelect: 'none',
						msUserSelect: 'none',
						userSelect: 'none'
					}
				} onClick={onToggle.bind(this)}>
			    {use === 'expanded' ? 'expand_less' : 'expand_more'}
			    </i>) : ""}
			</span>
    </span> : null }
        { (use === "expanded" && expanded) || (use === "collapsed" && collapsed) || children }
    </div>
    {action ? (<div className="card-action grey lighten-3">
      {action}
    </div>) : ""}
  </div>
}


export default Card;
