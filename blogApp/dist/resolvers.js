import { users, registerUser, loginUser } from "./controllers.js";
export const resolvers = {
    Query: {
        users,
    },
    Mutation: {
        registerUser,
        loginUser,
    },
};
