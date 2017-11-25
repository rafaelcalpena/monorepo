export default (websocket) => {
  console.log('Connected to server websocket.')
  console.log('Requesting current state')
  websocket.send('currentState');
}
