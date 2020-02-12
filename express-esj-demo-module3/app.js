const express=require('express')
const app=express()
const port=process.env.PORT || 8080
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('login')
})

app.listen(port,()=>{
    console.log("server is listening on port %s",port);
})