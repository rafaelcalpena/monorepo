import React from 'react'
import  {ApolloProvider} from 'react-apollo'
import customApolloClient from './customApolloClient'

const CustomApollo = ({children}) => (
	<ApolloProvider client={customApolloClient}>
		{children}
	</ApolloProvider>
)

export default CustomApollo