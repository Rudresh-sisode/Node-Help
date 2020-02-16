const express = require('express');
const bodyParser=require('body-parser');
var db=require('./db')
var user=require('./module/user');
var userRouter=require('./router/user')
var productsRouter=require('./router/products');


const app=express();
const port=process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/login.html')
})

//router used for displaying only what trigger are pressing by user
app.use('/user',userRouter);
app.use('/products',productsRouter);

app.listen(port,()=>{
    console.log("server started on port %s",port)
})