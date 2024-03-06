import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://app.cuidadoconelperro.com.mx/graphql',
  cache: new InMemoryCache(),
});

export default client;