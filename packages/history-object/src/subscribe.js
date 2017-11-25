import curry from 'curry'

const subscribe = ({storage}, callback) => {
  return storage.subscriptions.push(callback) - 1; 
}

export default curry(subscribe)
