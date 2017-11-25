import React from 'react'
import start from './TerminalFunctions'
import ProgramStatusIndicator from '../ProgramStatusIndicator'
import toggleProgram from './toggleProgram'
import {connect} from '@rafaelcalpena/custom-redux-stack'

class Terminal extends React.Component {


  constructor(){
    super();
    this.terminal = null;
  }

  componentDidMount () {
    this.terminal = start('terminal-'+ this.props.item)
    console.log('mounted', this.props.item, this.props);
    if (this.props.serverState && this.props.serverState.data){
      this.terminal.writeln(this.props.serverState.data.join('\n').replace(/\n/g, '\r\n'));
    }
    if (this.props.serverState && this.props.serverState.errors){
      this.terminal.writeln(this.props.serverState.errors.join('\n').replace(/\n/g, '\r\n'));
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.serverState && nextProps.serverState.data){

      //check if new data arrived
      if (nextProps.serverState.data.length > ((this.props.serverState && this.props.serverState.data) ? this.props.serverState.data.length : 0)){
        this.terminal.writeln(nextProps.serverState.data[nextProps.serverState.data.length-1].replace(/\n/g, '\r\n'));
      }

    }
    if (nextProps.serverState && nextProps.serverState.errors){

      if (nextProps.serverState.errors.length > ((this.props.serverState && this.props.serverState.errors) ? this.props.serverState.errors.length : 0)){
        this.terminal.writeln(nextProps.serverState.errors[nextProps.serverState.errors.length-1].replace(/\n/g, '\r\n'));
      }

    }
  }

  render(){

    const isRunning = this.props.serverState && this.props.serverState.running === true;

    return (<div style={{width: "50%", display: 'inline-block'}}>
      <h5 style={{margin: '2.5% 2.5%'}}>
        <ProgramStatusIndicator onClick={toggleProgram.bind(this, {
          websocketWrapper: this.props.websocket,
          isRunning,
          itemName: this.props.item
        })} isRunning={isRunning}/> &nbsp;&nbsp;{this.props.item}</h5>
      <div id={"terminal-"+ this.props.item} style={{height: '400px', margin:'2.5% 2.5%'}}></div>
    </div> )
  }
}

export default connect((state, {item}) => (state) => ({
  serverState: state.serverState.root.processes[item]
})

)(Terminal)
