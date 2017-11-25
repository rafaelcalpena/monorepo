import createRootReducer from './rootReducer'
import createCustomStore from '@rafaelcalpena/custom-redux-stack/lib/createCustomStore'

export default (topReducer) => {

  return {
    store: createCustomStore(createRootReducer(topReducer), {}),
    history: [
      {
        code: -1,
        topReducer,
        id: 0
      }
    ]
  };
}
