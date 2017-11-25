export default (dispatch, configWrapper) => (data) => {
  data = JSON.parse(data.data);
  if (data.channel === "currentState"){
    dispatch({
      type: 'SET_ROOT_STATE',
      data: data.message
    })
  } else if (data.channel === "updateState"){
    dispatch(data.message.action)
  }
}
