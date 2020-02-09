const express=require('express');//MVC framwork reference

const app=express();
var name="rudresh"

const port=process.env.PORT ||8080;

app.listen(port,()=>{
    console.log('server listening on port %s',port);

})

app.get('/',(req,res)=>{

    res.sendFile(__dirname+'/login.html')
})

app.post('/login',(req,res)=>{
    res.end('login successfully')
})