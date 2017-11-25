import get from './get'
import history from './history'
import subscribe from './subscribe'
import unsubscribe from './unsubscribe'
import sync from './sync'
import dispatch from './dispatch'

const api = (storage) => ({
  get: () => get({storage}),
  dispatch: dispatch({storage}),
  history: history({storage}),
  subscribe: subscribe({storage}),
  unsubscribe: unsubscribe({storage}),
  sync: sync({storage})
})

export default api;
