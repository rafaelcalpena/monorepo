import React from 'react'

class Accordion extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      expanded: this.props.initialState === true
    }
  }

  toggle(){
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    return <div>
      <h4> {this.props.title} <small><span onClick={this.toggle.bind(this)}>[{this.state.expanded === true ? 'close' : 'open'}]</span></small> </h4>
      {this.state.expanded ? this.props.children : null }
    </div>
  }
}

export default Accordion
