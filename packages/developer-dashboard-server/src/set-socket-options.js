import killTask from './tasks/killTask'
import startTask from './tasks/startTask'
import runTask from './tasks/runTask'


const sendMessage = (wsocket, channel, message) => {
  wsocket.send(
    JSON.stringify(
      {
        channel,
        message
      }
    )
  )
}

const setSocketOptions = (app, {config, wsWrapper, store, children, killChildrenProcessesInstance, config: {processes}}) => {

  app.ws('/ws', (wsocket, req) => {

    const subscription = store.subscribe((event) => sendMessage(wsocket, "updateState", event));


    console.log("New connection has opened!");

    store.dispatch({type:'SET_CONFIG', config})

    wsWrapper.ws = wsocket;

      wsocket.on('message', (data) => {
          console.log('MEssage:', data)
          /* use channels here too */
          if (data === "currentState"){
            sendMessage(wsocket, "currentState", store.get())
          } else if (JSON.parse(data).type === 'REQUEST_PROGRAM_KILL') {
            killTask({name: JSON.parse(data).name, taskManager: children})
            console.log(children)
          } else if (JSON.parse(data).type === 'REQUEST_PROGRAM_START') {
            //start
            const name = JSON.parse(data).name;
            processes.filter(item => item.name === name).forEach((item) => {
              startTask({
                taskManager: children,
                program: item.program,
                args: item.args,
                options: item.options,
                store,
                name
              })
            })

          } else if (JSON.parse(data).type === 'REQUEST_TASK_START'){
            runTask({
              killChildrenProcessesInstance,
              children,
              store,
              config
            })({
              name: JSON.parse(data).name
            })
          }
      })

      wsocket.on('close', () => {
          console.log('WebSocket was closed');
          store.unsubscribe(subscription)
      })
  })
}

export default setSocketOptions;
