import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://birdtailwaterfowl.com/graphql",
  cache: new InMemoryCache(),
});

export const getPosts = async () => {
  const { data } = await client.query({
    query: gql`
      {
        posts {
          nodes {
            databaseId
            title
            content
          }
        }
      }
    `,
  });

  return data.posts.nodes;
};
export default client;
