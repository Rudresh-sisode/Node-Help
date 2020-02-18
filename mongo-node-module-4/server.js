const express = require('express');
const bodyParser=require('body-parser');
var db=require('./db')
var user=require('./module/user');
var userRouter=require('./router/user')
var productsRouter=require('./router/products');
var ordersRouter=require('./router/order')

const app=express();
const port=process.env.PORT || 8080;

var isUserLog=true;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/login.html')
})

app.get('/products',[(req,res,next)=>{
/*
if(user is login) next
else authorize first
*/
if(isUserLog) next();
else res.json({"status":401,"message":"UnAthorized boss, sorry"})
},(req,res)=>{
    var userID=req.params.userID;
    console.log('******',userID)
    user.find((err,data)=>{
        res.json(data)
    })

}])
/*ES6
var person={name:"rudresh",age:"21",gender:"male"}
var [name,age,gender]=person
*/
//router used for displaying only what trigger are pressing by user
app.use('/users',userRouter);
//this is also called middleware or tunnel
app.use('/products',productsRouter);
app.use('/order',ordersRouter);

app.listen(port,()=>{
    console.log("server started on port %s",port)
})

//timestamp is 1:05:58