import React from 'react'
import Terminal from './Terminal'
import {connect} from '@rafaelcalpena/custom-redux-stack'

class Terminals extends React.Component {

  render () {
    return <div>
       {
      this.props.for.map(
        (item) => <Terminal item={item} websocket={this.props.websocket} key={item}/>
      )
    }
    </div>
  }
}

export default connect()(Terminals)
