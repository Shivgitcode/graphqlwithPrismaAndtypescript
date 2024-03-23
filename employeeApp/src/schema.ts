export const typeDefs = `#graphql
    type User {
        id:ID!
        employee:String
        email:String
        sex:String
        experience:Int
        skills:[Skill]

    }
    
    type Skill{
        id:ID
        name:String
        description:String
        userId:String
        user:User
    }

    type Query{
        users:[User]
        skills:[Skill]
    }

    type Mutation{
        createUser(user:UserInput):String
        createSkill(skill:SkillInput):String
    }

    input UserInput{
        employee:String
        email:String
        sex:String
        experience:Int

    }

    input SkillInput{
        name:String
        description:String
        userId:String


    }



`;
