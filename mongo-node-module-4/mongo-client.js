const mongodb=require('mongodb');

var MongoClient=mongodb.MongoClient;
const url='mongodb://localhost:27017/admin'



MongoClient.connect(url,(err,db)=>{

    if(err){
        console.log('error while connecting to DB')
    }
    else{
        console.log('db connected successfully');
        var collection=db.collection('loginuser')
        //console.log(collection)

        collection.find((error,data)=>{
            if(error){
                console.log("error while connecting")
            }
            else{
                console.log("Data receiced from loginusers collection");
              collection.insert({"name":"Rudresh","password":"rudresh123","admin":true},(er,result)=>{

                if(er){
                    console.log('insert fails')
                }
                else{
                    console.log("successfully inserted")
                }
              })
            }
        })
    }
})