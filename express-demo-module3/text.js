const fs=require('fs');

var data=fs.readFileSync('./info.txt')
console.log(data.toString())