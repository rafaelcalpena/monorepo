import React from 'react'

class WebSocketListener extends React.Component {
  componentDidMount(){
    var websocket = new WebSocket('ws://localhost:3001/ws')

    websocket.addEventListener('message', (data) => {
      if (this.props.onMessage){
        this.props.onMessage(data);
      }
    });

    websocket.addEventListener('open', () => {
      if (this.props.onOpen){
        this.props.onOpen(websocket)
      }

      if (this.props.bindTo){
        this.props.bindTo.websocket = websocket;
      }
    })
  }

  render(){
    return <div style={{height: '100%'}}>{this.props.children}</div>
  }
}

export default WebSocketListener;
