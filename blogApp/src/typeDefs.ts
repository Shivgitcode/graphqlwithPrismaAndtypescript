import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    registerUser(user: UserInput): String
    loginUser(user: LoginInput): String
  }

  input UserInput {
    username: String
    email: String
    password: String
  }
  input LoginInput {
    username: String
    password: String
  }
`;
