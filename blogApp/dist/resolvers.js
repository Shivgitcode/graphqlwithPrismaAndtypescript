import { users, registerUser, loginUser, user, getCurrentUser, } from "./controllers/user.js";
import { createPost, post, posts } from "./controllers/post.js";
export const resolvers = {
    Query: {
        users,
        post,
    },
    Mutation: {
        registerUser,
        loginUser,
        getCurrentUser,
        createPost,
    },
    Post: {
        user,
    },
    User: {
        posts,
    },
};
