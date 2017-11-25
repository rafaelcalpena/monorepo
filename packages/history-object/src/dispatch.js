import api from './api'
import _ from 'lodash'
import curry from 'curry'
import getId from './get-id'

const dispatch = ({storage}, action) => {

  const {memory: {store, history}} = storage;

  const event = {
      code: 3,
      action,
      id: getId()
  };

  store.dispatch(action);

  storage.memory = {
    store: store,
    history: [
      ...history,
      event
    ]
  };

  storage.subscriptions.forEach((fn) => fn(event))

  return api(storage);
}

export default curry(dispatch);
