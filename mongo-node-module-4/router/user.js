const express=require('express')
const router=express.Router();

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