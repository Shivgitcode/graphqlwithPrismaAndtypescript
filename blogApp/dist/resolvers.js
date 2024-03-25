import { users, registerUser, loginUser, user, getCurrentUser, } from "./controllers/user.js";
import { createPost, post, posts, onePost, updatePost, } from "./controllers/post.js";
export const resolvers = {
    Query: {
        users,
        post,
        onePost,
    },
    Mutation: {
        registerUser,
        loginUser,
        getCurrentUser,
        createPost,
        updatePost,
    },
    Post: {
        user,
    },
    User: {
        posts,
    },
};
