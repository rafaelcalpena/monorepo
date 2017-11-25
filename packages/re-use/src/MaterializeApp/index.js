import React from 'react'

/* this is for Materialize. It should be moved to the re-use components */

class MaterializeApp extends React.Component {
  componentWillMount(){
  window.$ = window.jQuery = require('jquery/dist/jquery.js');
  require('materialize-css/dist/css/materialize.css');
  require('materialize-css/dist/js/materialize.js');
  }
  render(){
    return <div style={{height: '100%'}}>{this.props.children}</div>
  }
}

export default MaterializeApp
