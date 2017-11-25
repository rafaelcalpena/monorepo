import React from 'react'
import WebSocketListener from './WebSocketListener'
import {connect} from '@rafaelcalpena/custom-redux-stack'
import SideList from '@rafaelcalpena/re-use-layout/lib/modules-list'
import { Route } from 'react-router'
import Categories from './Categories'
import Terminals from './Terminals/'
import sideListTree from './sideListTree'
import onMessage from './onMessage'
import onOpen from './onOpen'
import AllProcesses from './AllProcesses'
let websocketWrapper = {};

const isProgramRunning = (serverState, name) => {
  return serverState.processes[name] && (serverState.processes[name].running === true) ? true : false
}

const UserActions = ({ dispatch, config, st }) => {


  return  <div style={{height: '100%'}}>
    <WebSocketListener onMessage={onMessage(dispatch)} onOpen={onOpen} bindTo={websocketWrapper}>
      {
         (typeof config !== "undefined") ? (<div style={{height: '100%'}}>
        <div className="col l3"></div>
      <SideList tree={ sideListTree({

        categoriesElements: config.categoriesElements,
        websocketWrapper,
        startTask,
        tasks: config.tasks
      }) }/>

       <div className="col l9" style={{
        height:'100%',
        padding: '0.5rem',
      }}>
        <div style={{
          border: '1px solid #e0e0e0',
                borderRadius: '2px',
                //height: '100%',
                        //overflow: 'auto',
                padding: '0.5rem',
                marginBottom: '0.5rem'
              }}>


      <Route path="/web-dev/all-processes" render={
        (props) => {
          return <AllProcesses {...props}
            processes={config.processes}
            isProgramRunning={isProgramRunning}
            websocketWrapper={websocketWrapper}
           />
        }
      } />



        <Route path="/web-dev/category/:category/" exact render={
          (props) => {
            return  <Categories
                  {...props}
                  config = {config}
                  startTask={startTask}
                  websocketWrapper={websocketWrapper}  />
          }


        } />

        <Route path="/web-dev/category/:category/tasks/:task" render={
          (props) => {

            return  <div>
              <h4>Tasks >  {config.tasks.find(item => item.name === props.match.params.task).name} </h4>
              <Terminals for={config.tasks.find(item => item.name === props.match.params.task).processes}
                  {...props}
                  websocket={websocketWrapper}  /></div>
          }


        } />


      </div>

    </div></div>) : null }





    </WebSocketListener>

  </div>
}


const startTask = (task) => websocketWrapper.websocket.send(JSON.stringify({
  type:'REQUEST_TASK_START',
  name: task
}));

export default connect((state) => ({
  config: state.serverState.root.config,
  st: state.serverState.root.config
})

)(UserActions)
