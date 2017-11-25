import React, { Component } from 'react';
import TreeView from '../list-tree/tree-view';

class TreeList extends Component {

  render(){
    return (
			<div className="col l3 modules-list no-margin" style={{
        height:'calc(100% - 64px)',
        padding: '0 0.5rem',
        position: 'fixed'
      }}>
        <div className="collection modules-list-inside no-margin scrollable" style={{
          maxHeight: 'calc(100% - 1rem)',
          overflow: 'auto',
          margin: '0.5rem 0 0.5rem 0'
        }}>
          <TreeView
            tree={this.props.tree} />
        </div>
      </div>
    )
  }
}


export default TreeList;
