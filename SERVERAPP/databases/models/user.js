

module.exports= (sequelize,DataTypes)=>{
    const User = sequelize.define("tbluser",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          createdAt:{
           type:DataTypes.DATE
          },
    
        intUserID:{
            type :DataTypes.INTEGER,
           
            
     
        },
        strName:{
            type:DataTypes.STRING
        },
        dtmDOB:{
            type:DataTypes.DATE
        },
        strEmail:{
            type:DataTypes.STRING
        },
        strPassword:{
            type:DataTypes.STRING
        },
        blnIsActive:{
            type:DataTypes.BOOLEAN
        },


    })
    return User
}