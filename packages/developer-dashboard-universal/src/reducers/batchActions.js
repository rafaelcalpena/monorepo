const batchActions = (childReducer) => (state, wrapperAction) => {
  const {type, actions} = wrapperAction;
  switch(type){
    case 'BATCH_ACTIONS':
      let lastState = state;
      actions.forEach(action => {
        lastState = childReducer(lastState, action)
      });
      return lastState;
    default:
      return childReducer(state, wrapperAction)
  }
}

export default batchActions;
