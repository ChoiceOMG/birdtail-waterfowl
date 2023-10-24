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
        pages(where: { title: "About Us" }) {
          nodes {
            id
            title
            content
          }
        }
      }
    `,
  });

  // console.log(result);

  return data.pages.nodes;
};

export const getHuntings = async () => {
  const { data } = await client.query({
    query: gql`
      {
        pages(where: { title: "What We Hunt" }) {
          nodes {
            title
            content
          }
        }
      }
    `,
  });

  return data.pages.nodes;
};

export const getContact = async () => {
  const { data } = await client.query({
    query: gql`
      {
        pages(where: { title: "Contact" }) {
          nodes {
            id
            title
            content
          }
        }
      }
    `,
  });

  return data.pages.nodes;
};
export const getActivities = async () => {
  const { data } = await client.query({
    query: gql`
      {
        pages(where: { title: "Other Activities" }) {
          nodes {
            id
            title
            content
          }
        }
      }
    `,
  });

  return data.pages.nodes;
};
export const getAccommodations = async () => {
  const { data } = await client.query({
    query: gql`
      {
        pages(where: { title: "Duck Hunting Lodges and Amenities" }) {
          nodes {
            id
            title
            content
          }
        }
      }
    `,
  });

  return data.pages.nodes;
};
export const getService = async () => {
  const { data } = await client.query({
    query: gql`
      {
        pages(where: { title: "Plan Your Guided Waterfowl Hunt" }) {
          nodes {
            id
            title
            content
          }
        }
      }
    `,
  });

  return data.pages.nodes;
};
export default client;
