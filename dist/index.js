"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const startMyServer = async () => {
    const { url } = await startStandaloneServer(server, {
        port: 4000,
    });
    console.log(`listening on port 4000 ${url}`);
};
startMyServer();
