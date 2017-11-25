import React, { Component } from 'react';
import TreeView from './tree-view.js';

class SubTreeView extends Component {

  constructor(props){
    super(props);
    this.state = {
    	isOpen: false
    }
  }

  toggleSubTree(){
  	this.setState({
  		isOpen: !this.state.isOpen
  	})
  }

  render(){
    return (
          <li style={{cursor: 'pointer'}} className="disable-text-selection">
            <div className={"collection-item grey-text text-darken-3 "} onClick={this.toggleSubTree.bind(this)} >{this.state.isOpen ? "\u2013" : "+"} {this.props.title} </div>
            <div style={{paddingLeft: '1em'}} className={"treePadding " + (this.state.isOpen ? "": "hide") }>
            	 <TreeView tree={this.props.tree} />
           	</div>
          </li>
    )
  }
}


export default SubTreeView
