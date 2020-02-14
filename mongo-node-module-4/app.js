const express = require('express')
const app=express()
const port=process.env.PORT || 8080

app.listen(port,()=>{
    console.log('server running on port %s',port);

})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.post('/register',(req,res)=>{

    var username=req.body.email;
    var password=req.body.pwd;

})