const request=require('request');
const url='https://pro.openweathermap.org/data/2.5/climate/month?q=London&appid=01fc54654d0fa64b2085b411513c0d42';
/*
api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
*/

request(url,{json:true},(err,res,body)=>{

    console.log(res.body)
});