import {gql} from "@apollo/client";

export const USER_LOGIN = gql`
mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      user {
        username
      }
      accessToken
      expiresAt
    }
  }
`;

export const REVIEW_ADD = gql`
mutation CreateReview($review: CreateReviewInput) {
  createReview(review: $review) {
    repositoryId
  }
}
`;

export const USER_ADD = gql`
mutation CreateUser($user: CreateUserInput) {
  createUser(user: $user) {
    id
  }
}
`;

export const DELETE_REVIEW = gql`
mutation DeleteReview($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}
`;

