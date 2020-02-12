const fs=require('fs')
const util=require('util')

var read=util.promisify(fs.readFile)


Promise.all([read('./one.txt'),read('./two.txt'),read('./third.txt')])
.then((data)=>{
    console.log(data.toString())
    const [data1,data2,data3]=data;
    console.log(data1.toString())

    console.log(data2.toString())
    console.log(data3.toString())
})
.catch(()=>{
    console.log('boss error occured')
})
.catch(err=>{
    console.err('boss error occord')
})

