import { createStore, compose, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

/* Custom store creator for Redux. Consists of:
	- Thunk-Middleware
	- persistState (Saves the state in localStorage)
	- Redux DevTools Extension connector */
export default (reducer, {reduxDevTools, persisteStateEnabled}) => {

	const secondMiddleware = (typeof reduxDevTools !== "undefined") ?
		compose(persistState(), reduxDevTools)
		:
		((persisteStateEnabled === true) ? persistState : undefined);

	return createStore(reducer,
		applyMiddleware(thunk),
		secondMiddleware
	)
}
