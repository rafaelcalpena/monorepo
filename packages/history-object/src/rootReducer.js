export default (topReducer) => (state = {}, action) => {
  switch (action.type){
    case 'SET_ROOT_STATE':
      return action.data
    default:
      return {
        root: topReducer(state.root, action)
      }
  }
}
