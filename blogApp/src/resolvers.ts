import {
  users,
  registerUser,
  loginUser,
  getCurrentUser,
} from "./controllers/user.js";

import { createPost } from "./controllers/post.js";

export const resolvers = {
  Query: {
    users,
  },
  Mutation: {
    registerUser,
    loginUser,
    getCurrentUser,
    createPost,
  },
};
