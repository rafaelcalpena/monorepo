import React from 'react'

const TitleBar = ({title, links, color, centerLogo, elevation, background }) => (
  <div className="navbar-fixed">
  <nav style={{'backgroundColor': `${background}`}} className={` ${ color ? color : ""} z-depth-${ elevation || '1'} `}>
    <div className="nav-wrapper">
      <a href="#" className={`brand-logo ${ centerLogo ? 'center' : '' } `}>{title}</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        { links ? links.map(link => (
            <li key={link.text}><a href={link.link}>{link.text}</a></li>
          )
        ) : undefined}
      </ul>
    </div>
  </nav>
  </div>
)

export default TitleBar
