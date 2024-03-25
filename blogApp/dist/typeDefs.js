import { gql } from "apollo-server-express";
export const typeDefs = gql `
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    description: String!
    userId: String!
    user: User
  }

  type Query {
    users: [User]
    post: [Post]
    onePost(id: ID!): Post
  }

  type Mutation {
    registerUser(user: UserInput): String
    loginUser(user: LoginInput): String
    getCurrentUser(id: ID!): String
    createPost(post: PostInput): Post
    updatePost(id: ID!, post: PostInput): String
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
