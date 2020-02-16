const express = require('express');
const bodyParser=require('body-parser');
const app=express();

var db=require('./db')
var user=require('./module/user');

const port=process.env.PORT || 8080;
//to read the name property from html or ejs form or page body parser used there for.(tunnel)
app.use(bodyParser.urlencoded({ extended: true}))
//app.use(bodyParser.json);

app.listen(port,()=>{
    console.log('server running on port %s',port);

})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.post('/getregister',(req,res)=>{
    res.sendFile(__dirname+'/login.html')

})

app.post('/login',(req,res)=>{
    
    user.find({"name":req.body.email},(err,record)=>{
        if(err){
            console.log("error while logging in")
        }
        else if(record == null){
            console.log("no user found");
            res.json({"Message":"no user found","status":401})
        }
        else if(record[0].password != req.body.pwd){
            console.log('Something wrong');
            res.json({"message":"user not found","status":401})
            console.log(record.password)
            console.log(req.body.pwd)
        }
        else{
            res.json({"message":"user find","status":200})
        }
    })

})
//here we are passing one id in this get method using postman
//we can also do the same operation on advance lavel
app.get('/user/:userID',(req,res)=>{

    var userID=req.param.userID;
    console.log('*************',userID)
    user.find((err,data)=>{
        res.json(data);
    })
})

app.post('/register',(req,res)=>{

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