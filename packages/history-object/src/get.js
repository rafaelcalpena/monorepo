import curry from 'curry'

const get = ({storage}) => {
  return storage.memory.store.getState();
}

export default curry(get);
