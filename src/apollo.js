import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: 'https://www.graphqlhub.com/graphql' // por defecto la URL seria '/graphql'
});