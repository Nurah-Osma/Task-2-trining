const Sequelize =require('sequelize');
const Op = Sequelize.Op;
const db =require("../../databases/database");
const tbluser= db.tbluser


module.exports={
    getUserByID:async(args,req)=>{
      try{
        return await tbluser.findOne({
           attributes:{
               exclude:['strPassword']
            },
            where:{
               intUserID: args.intUserID
            }
        });
      }catch(err){
        throw err;
      }
    },

    getAllUsers:async(args,req)=>{
        try{
            return await tbluser.findAll();
        }catch(err){
            throw err;
        }
    },

    loginUser:async(args,req)=>{

    },

    addUser:async(args,req)=>{

    },
 
    deleteUser:async(args,req)=>{

    },

    updateUser:async(args,req)=>{

    },

   updateUserStatus:async(args,req)=>{

   }


}