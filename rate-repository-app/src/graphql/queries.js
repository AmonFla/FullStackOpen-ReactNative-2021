import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
        edges {
            node {
              id
              ownerAvatarUrl
              fullName
              description
              language
              stargazersCount
              forksCount
              reviewCount
              ratingAverage
            }
          }
    }
  }
`;

export const GET_REPOSITORY = gql`
query getRepository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    url
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`;
export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;