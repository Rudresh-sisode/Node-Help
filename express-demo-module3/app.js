const express=require('express')
const app=express();
const fs=require('fs')

const port=process.env.PORT || 8080;

app.listen(port,()=>{
    console.log('server is on port %s',port)
})

//define a route
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
})

app.post('/login',(req,res)=>{
    res.end('login successfully')

})
app.post('/loginfail',(req,res)=>{
    res.end('login fails')
})
app.get('/getMovies',(req,res)=>{
    var data=fs.readFileSync('./movies.json')
    var movies=JSON.parse(data).movies
    console.log(movies)
    res.json(movies[0].name)
    
})