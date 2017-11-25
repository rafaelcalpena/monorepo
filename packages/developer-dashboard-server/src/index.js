import logServerStart from './log-server-start'
import setSocketOptions from './set-socket-options'
import historyObject from '@rafaelcalpena/history-object'
import registerKillChildren from './tasks/registerKillChildren'
import {reducers as topReducer} from '@rafaelcalpena/developer-dashboard-universal/'

import createExpressServer from '@rafaelcalpena/create-express-server'

/* TODO: MIGRATE */
let wsWrapper = {};
const store = historyObject(topReducer)
console.log('state:', store.get())
const children  = [];

//console.log('environment config path', process.env.CONFIG_PATH);
const config = require(process.env.CONFIG_PATH);

const killChildrenProcessesInstance = registerKillChildren({children, store});

const app = createExpressServer(
  (app) => setSocketOptions(app, {config, wsWrapper, store, children, killChildrenProcessesInstance}),
  logServerStart
)
