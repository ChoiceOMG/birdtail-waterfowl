import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://devwp.birdtailwaterfowl.com/graphql",
  cache: new InMemoryCache(),
});
//getRecord
//make this properties.
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
export const getAboutUsData = async () => {
  const { data } = await client.query({
    query: gql`
      {
        pages {
          nodes {
            id
            title
            content
            link
          }
        }
      }
    `,
  });

  return data.pages.nodes;
};
export default client;
