const express = require ("express")
const PORT =process.env.PORT||4000
const app = express('')
const {graphqlHTTP}=require("express-graphql")
const graphQlSchema= require('./graphql/scheama');
const graphQlResolvers=require("./graphql/resolver")
const cors = require('cors')
var uploadfiles= require('./resfullapi/uploadfiles');
const bodyParser=require('body-parser')
// ////////////////// db /////////////////////////////
const db =require("./databases/database");
db.sequelize.authenticate()
 .then(()=>{
    console.log(`ServerApp is connecd to the DOB &Listen on port ${PORT}`);
  })
.catch(err=> {
  console.log("Error !" +err);
});

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(uploadfiles)





app.use("/graphql",graphqlHTTP({
     schema:graphQlSchema,
     rootValue:graphQlResolvers,
     graphiql:true


}))

app.listen(PORT,()=>{
    console.log(`ServerApp is listening on port ${PORT}`);
})