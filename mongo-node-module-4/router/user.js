const express=require('express')
const router=express.Router();
var user=require('../module/user')
//here this userID is accessing with the help of postman
router.get('/:userID',(req,res)=>{

    var userID=req.params.userID;
    console.log('*************'+userID)
    user.find((err,data)=>{
        res.json(data);
    })
})

router.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/register.html')

})


router.post('/register',(req,res)=>{

    var username=req.body.email;
    var password=req.body.pwd;
    console.log(username+" password is "+password)

    var userCollection=new user();
    userCollection.name=username;
    userCollection.password=password;
    userCollection.save((err,data)=>{
        if(err){
            console.log('Boss error occured while regestering user '+err);
        }
        else{
            res.json(data)
            console.log('data saved proberly')

        }
    })

})
module.exports=router;