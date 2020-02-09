const fs=require('fs');
fs.stat('node_modules',(err,stats)=>{
    if(err) throw err
    else{
        if(stats.isFile()){
            console.log('it is a file')
        }
        else if(stats.isDirectory()){
            console.log('its a directory')
        }
    }
})