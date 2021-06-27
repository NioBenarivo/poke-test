// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // uri: "https://countries.trevorblades.com",
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
});

export default client;