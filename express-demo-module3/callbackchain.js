function delay(secs,callback){
    setTimeout(callback,secs*1000)
}

console.log("program started")

delay(2,function(){
    console.log('inside callback')
    delay(1,()=>{
        console.log('inside second callback')
    })
})