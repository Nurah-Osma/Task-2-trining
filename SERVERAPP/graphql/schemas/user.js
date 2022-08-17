exports.User=`
scalar Date
type User{
    createdAt:Date
    id:Int
    intUserID:Int
    strName: String
    dtmDOB:Date
    strEmail:String
    strPassword:String
    blnIsActive:Boolean
}
`
exports.UserInput=`
input UserInput{
    id:Int
    intUserID:Int
    strName: String
    dtmDOB:Date
    strEmail:String
    strPassword:String
    blnIsActive:Boolean 
}
`
exports.UserQueries=`
getUserByID(intUserID:Int!):User!
loginUser(strEmail:String!,strPassword:String!):User!
getAllUsers:[User!]!
`

exports.UserMutation=`
addUser(userInput:UserInput):User
updateUser(userInput:UserInput):User
deletUser(intUserID:ID!):String
updateUserStatus(strEmail:String, blnIsActive:Boolean):User
`