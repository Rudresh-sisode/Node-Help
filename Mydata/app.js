var fs=require('fs');
fs.readFile('./empl.txt',(err,data)=>{
    if(err) throw err
    console.log(data.toString());
});