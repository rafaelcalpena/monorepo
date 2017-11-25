import React from 'react'

import { Provider } from '@rafaelcalpena/custom-redux-stack'
import { HashRouter } from 'react-router-dom';
import CustomApollo from '../CustomApollo/'

/* Custom Stack element that contains my custom config for react projects:
  1. React-redux provider, to allow the use of Redux in the project;
  2. HashRouter, to allow single-page-application behavior in the project;
  3. CustomApollo, to allow the integration with ApolloClient in the project;
*/

const CustomStack = ({reduxStore, app}) => {
  return <Provider store={reduxStore}>
  			<CustomApollo>
          <HashRouter>
  				      {app()}
          </HashRouter>
  			</CustomApollo>
    </Provider>
}

export default CustomStack
