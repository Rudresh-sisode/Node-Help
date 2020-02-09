const fs=require('fs');
console.log('program started')

setTimeout(()=>{
    console.log('outline')
},2000)
var data=fs.readFileSync('./exmplo.txt')
console.log(data.toString())
console.log('program ended');
