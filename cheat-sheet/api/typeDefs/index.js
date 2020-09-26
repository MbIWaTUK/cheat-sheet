import gql from "graphql-tag"

export const typeDefs = gql`
  scalar Date
  scalar Time
  scalar DateTime
  scalar Upload
  type Mutation {
  ############################
  # USER
  ############################

  userRegisterAndLoginSocial(
      id: String!
      type: Social
      email: String
    ): LoginPayload
  }

  type LoginPayload {
    token: String!
  }
`