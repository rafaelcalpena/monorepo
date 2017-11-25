import batchActions from './batchActions'

const scrollbackLimit = 1000;

const processData = (state = [], action) => {
  switch (action.type) {
    case 'PROCESS_DATA':
      return [
        ...state.slice(-scrollbackLimit),
        action.data
      ];
    default:
      return state;
  }
}

const processError = (state = [], action) => {
  switch (action.type) {
    case 'PROCESS_ERROR':
      return [
        ...state.slice(-scrollbackLimit),
        action.data
      ];
    default:
      return state;
  }
}

const processReducer = (state, action) => {
  switch (action.type) {
    case 'PROCESS_DATA':
      return {
        ...state,
        data: processData(state.data, action)
      }
      case 'PROCESS_ERROR':
        return {
          ...state,
          errors: processError(state.errors, action)
        }
    case 'PROCESS_EXIT':
      return {
        ...state,
        running: false
      }
    default:
      return state;
  }
}

const processes = (state = {}, action) => {
  switch (action.type) {
    case 'PROCESS_START':
      return {
        ...state,
        [action.name]: {
          running: true
        }
      }
    case 'PROCESS_EXIT':
      return {
        ...state,
        [action.name]: processReducer(state[action.name], action)
      };
    case 'PROCESS_DATA':
      return {
        ...state,
        [action.name]: processReducer(state[action.name], action)
      }
    case 'PROCESS_ERROR':
      return {
        ...state,
        [action.name]: processReducer(state[action.name], action)
      }
    default:
      return state;
  }
}

const config = (state = null, action) => {
  switch (action.type) {
    case 'SET_CONFIG':
      return action.config;
    default:
      return state
  }
}


export default batchActions((state = {}, action) => {
  return {
    processes: processes(state.processes, action),
    config: config(state.config, action)
  }
})
