/* The object contains its state, and a log
  Use functional programming for the api

  Codes:
         -1: Initialize,
         0: Set (Add or update),
         1: Remove

TODO: use functional programming for set/get (no side effects)
      use custom build of sugar
      filter out unsupported types of input (functions, etc)
*/

import api from './api'
import storeAndHistory from './storeAndHistory'


export default (topReducer) => {
  const storage = {
    memory: storeAndHistory(topReducer),
    subscriptions: []
  };

  return api(storage);
}
