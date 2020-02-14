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