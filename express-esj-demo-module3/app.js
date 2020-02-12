const express=require('express')
const app=express()
const port=process.env.PORT || 8080
app.set('view engine','ejs');
const fs=require('fs')
app.get('/',(req,res)=>{
    res.render('login',{title:'FACEBOOK'})

    /*
    res.end()
    res.sendFile();
    res.json();
    */
})

app.listen(port,()=>{
    console.log("server is listening on port %s",port);
})

app.post('/login',(req,res)=>{
    var stu=fs.readFileSync('./model/students.json')
    console.log(stu.toString())
    res.render('homepage',{student:JSON.parse(stu).students})
})