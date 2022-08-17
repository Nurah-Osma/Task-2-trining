const userResolver=require("./resolvers/user");

const rootResolver={
    ...userResolver,
}
module.exports=rootResolver