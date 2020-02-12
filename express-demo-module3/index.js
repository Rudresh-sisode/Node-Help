const request=require('request');
const url='http://localhost:8080/getMovies';

request(url,{json:true},(err,res,body)=>{

    console.log(res.body)
});