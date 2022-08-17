const {buildSchema}=require('graphql');
const userSchema=require('./schemas/user')

module.exports= buildSchema(`
${userSchema.User}
${userSchema.UserInput}

type RootQuery{
    ${userSchema.UserQueries}
}

type RootMutation{
    ${userSchema.UserMutation}
}
schema{
    query:RootQuery
    mutation:RootMutation
}


`)