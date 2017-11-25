export default ({
  websocketWrapper,
  itemName,
  isRunning
}) => {
  if (websocketWrapper){

    if (isRunning) {

      websocketWrapper.websocket.send(JSON.stringify({
      type: 'REQUEST_PROGRAM_KILL',
      name: itemName
      }))

    } else {

      websocketWrapper.websocket.send(JSON.stringify({
      type: 'REQUEST_PROGRAM_START',
      name: itemName
      }))

    }

  }

}
