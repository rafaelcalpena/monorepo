import {ApolloClient, createNetworkInterface } from  'react-apollo'

const networkInterface = createNetworkInterface({ 
  uri: 'http://localhost:3001/graphql',
});
const customApolloClient = new ApolloClient({networkInterface});
export default customApolloClient