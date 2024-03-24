import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Post {
    id: ID!
    title: String!
    description: String!
    userId: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    registerUser(user: UserInput): String
    loginUser(user: LoginInput): String
    getCurrentUser(id: ID!): String
    createPost(post: PostInput): Post
  }

  input UserInput {
    username: String
    email: String
    password: String
  }
  input PostInput {
    title: String
    description: String
    userId: String
  }
  input LoginInput {
    username: String
    password: String
  }
`;
