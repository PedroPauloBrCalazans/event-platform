import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cld98ojzd0kf001ujdb57ge5u/master',
    cache: new InMemoryCache()
})



