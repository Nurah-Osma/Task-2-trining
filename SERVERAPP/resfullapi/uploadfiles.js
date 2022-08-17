const express= require('express')

const router= express.Router()
const multer= require('multer')
const path= require('path')

var appDir=path.dirname(require.main.filename)
const publicDir=path.join(appDir,'/public');

const storage=multer.diskStorage({
    destination:function(req,file,cd){
        console.log("Directory:"+publicDir)
        cd(null,publicDir +'/')
    },
    filename:function(req,file,cd){
        console.log(file.originalname)
        cd(null,file.originalname)
    }
})
const uploadStorage=multer({storage:storage})

router.post('/upload',uploadStorage.array("file",10),(req,res)=>{
    console.log(req.files)
    return res.send("Multiple Files uploaded successfully")
})

module.exports=router






    