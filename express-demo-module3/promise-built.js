var mongoclient=require('mongodb')
var url='mongodb://localhost:2700/flipcart'
mongoclient.connect(url,(err,db)=>{


})

//using promises
mongoclient.connect(url).then((err,db)=>{

    db.collection('employee').insert(()=>{
        'name':'',
        'dept':''
    })
    .then((db)=>{
        db.collection('address').insert(()=>{
            'currentadd':'jamner',
            'dist':'',
            'state':''
        })
    })
    .catch(()=>{
        console.log('some error occred')
    })

})