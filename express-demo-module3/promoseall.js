const fs=require('fs')
const util=require('util')

var read=util.promisify(fs.readFile)


Promise.all([read('./one.txt'),read('./two.txt'),read('./third.txt')])
.then((data)=>{
    console.log(data.toString())
    
})
