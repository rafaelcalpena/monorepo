import React from 'react'
import { Link } from 'react-router-dom'
import ProgramStatusIndicator from './ProgramStatusIndicator'
import toggleProgram from './Terminals/toggleProgram'
import {connect} from '@rafaelcalpena/custom-redux-stack'

//duplicated from parent component
const isProgramRunning = (serverState, name) => {
  return serverState.processes[name] && (serverState.processes[name].running === true) ? true : false
}


const ProgramStatusIndicatorConnector = connect(
  (state, {terminal}) => ({
    isRunning:  isProgramRunning(state.serverState.root, terminal)
  })
)

(
  ({serverState, websocketWrapper, terminal, isRunning}) => <ProgramStatusIndicator
    onClick={() => {

      toggleProgram(
    {
      websocketWrapper,
      itemName: terminal,
      isRunning
    })}
    }
    isRunning={isRunning} />

)

//will "cache the initial state and props. Study possible drawbacks"
const ProgramStatusIndicatorConnector2 = connect(
  (state, {proc}) => (state) => ({
      isRunning: isProgramRunning(state.serverState.root, proc)
  })
)

(({serverState, proc, websocketWrapper, isRunning}) => <ProgramStatusIndicator
  onClick={() => {
    toggleProgram(
      {
       websocketWrapper,
       itemName: proc,
       isRunning
      })}
  }
 isRunning={isRunning} /> )


export default ({mutate, categoriesElements, websocketWrapper, startTask, tasks}) =>
        categoriesElements.reduce((acc, {title, terminals, buttons, id}) => {
          return {
            ...acc,
            [title]: {
              element: <Link to={`/web-dev/category/${id}`}><span> {title} </span></Link>,
              children: {
                Terminals: {
                  element: <span> Terminals </span>,
                  children:
                    terminals.reduce((acc, terminal) => {
                      return {
                        ...acc,
                        [terminal]: {
                          element: [  <ProgramStatusIndicatorConnector

websocketWrapper={websocketWrapper} terminal={terminal}
                          />

                              ,

                              <span>&nbsp;&nbsp;&nbsp;{terminal} </span>

                          ] ,
                          children: {}
                        }
                      }
                    }, {})
                },
                Tasks: {
                  children: buttons.reduce((acc, {text, task}) => {
                    return {
                      ...acc,
                      [`${text} (${task})`]: {
                        element: <span>&nbsp;
                        <i style={{fontSize: '15px', color: '#039be5' }} onClick={() => startTask(task, mutate)} className="material-icons">send</i>
                        &nbsp;
                        <Link to={`/web-dev/category/${id}/tasks/${task}`}>
                        <span style={{textDecoration: 'underline', color: '#039be5'}} >
                          {text} ({task})
                        </span>
                      </Link>
                        </span>,
                        children: (tasks.find(taskIterated => taskIterated.name === task) || {processes: []}).processes.reduce((acc, proc) => {
                          return {
                            ...acc,
                            [proc]: {
                              element: [

                                <ProgramStatusIndicatorConnector2

proc={proc} websocketWrapper={websocketWrapper}

                                />

                                ,
                                <span>&nbsp;&nbsp;&nbsp;{proc} </span>

                              ],
                              children: {}
                            }
                          }
                        }, {})
                      }
                    }
                  }, {})
                }
              }
            }
          }
        }, {})
