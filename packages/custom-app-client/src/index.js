import React from 'react'
import { render } from 'react-dom'
import {CustomStack} from '@rafaelcalpena/re-use'
import DeveloperDashboard from '@rafaelcalpena/developer-dashboard-client'
import registerServiceWorker from './registerServiceWorker';
import { combineReducers } from '@rafaelcalpena/custom-redux-stack'
import createRootReducer from '@rafaelcalpena/history-object/lib/rootReducer'
import {reducers as topReducer} from '@rafaelcalpena/developer-dashboard-universal'
import {createCustomStore} from '@rafaelcalpena/custom-redux-stack'
import { MaterializeApp } from '@rafaelcalpena/re-use'
import {MaterialIconsFont} from '@rafaelcalpena/re-use'

/* There is a MaterializeApp in Lembreti Client/ LembretiContent
routes
added custom stack, div,
<MaterialIconsFont/>
packages.json
/*
	We pass LembretiStore to the CustomStack component
*/
const devDashReducer = combineReducers({
	serverState: createRootReducer(topReducer)
});

/* TODO: this could be merged with other "stores" (their reducers) instead */
const DeveloperDashboardStore = createCustomStore(devDashReducer, {
  reduxDevTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  persistStateEnabled: true
})


render(
	<CustomStack reduxStore={DeveloperDashboardStore} app={
			() => 		<div className="row" style={{height: 'calc(100% - 64px)', marginBottom: 0}}>
									<MaterialIconsFont/>
									<MaterializeApp>
										<DeveloperDashboard />
									</MaterializeApp>
								</div>
		} />,
  document.getElementById('root')
)

registerServiceWorker();
