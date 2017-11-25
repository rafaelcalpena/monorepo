import React, { Component } from 'react';
import SubTreeView from './sub-tree-view.js';

class TreeView extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  selectModule(id){
    this.props.selectModule.call(this, id);
  }

  renderItems(){
    var that = this;
    var tree = this.props.tree;
    return Object.keys(tree).map((leafName) => {
      var children = tree[leafName]["children"];
      if (children && Object.keys(children) && Object.keys(children).length === 0){
        return ( <div
                    className={"collection-item grey-text text-darken-3 wrap-words" + 'active'}
                    key={leafName}>
                      {tree[leafName]["element"] || leafName}
                 </div>)
      } else {
        return (
          <SubTreeView key={leafName} tree={tree[leafName]["children"]} title={tree[leafName]["element"] || leafName} />
        )
      }
    })
  }

  render(){
    return <ul style={{margin: 0}}> {this.renderItems()} </ul>
  }
}


export default TreeView;
