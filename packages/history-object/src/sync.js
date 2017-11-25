import api from './api'
import curry from 'curry'

const sync = ({storage}, operation) => {

  const {code} = operation;

  if (code === 0){
    return api(storage).dispatch({
      type: 'SET_ROOT_STATE',
      data: operation.data
    });
  } else if (code === 3){
    return api(storage).dispatch(operation.action)
  }
}

export default curry(sync);
