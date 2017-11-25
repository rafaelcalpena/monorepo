import curry from 'curry'

const history = ({storage}) => (from) => {
  if (from) {
    return storage.memory.history.slice(storage.memory.history.findIndex((item) => item.id === from))
  }
  return storage.memory.history;
}

export default history
