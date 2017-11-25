import curry from 'curry'

const unsubscribe = ({storage}, id) => {
  storage.subscriptions.splice(id, 1); 
}

export default curry(unsubscribe)
