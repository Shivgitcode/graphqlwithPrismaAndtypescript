"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeDefs = `#graphql 
    type Cart{
        id:ID!
        item:String!
        quantity:Int
        
    }

    type Query{
        items:[Cart]

    }

    type Mutation{
        addItem(cart:CartInput!):String
    }

    input CartInput{
        item:String!
        quantity:Int!
    }

`;
module.exports = typeDefs;
