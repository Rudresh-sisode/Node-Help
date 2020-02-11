//var promise=require('promise')
//you have to install it
//this is implicitly performance.
var promise=new Promise(function(resolve,reject){

    const a=4;
    const b=2;

    if(a+b==6) resolve()
    else reject()
})
promise.then(()=>{
    console.log('successfully')
})
promise.catch(()=>{
    console.log("error occured boss")
})