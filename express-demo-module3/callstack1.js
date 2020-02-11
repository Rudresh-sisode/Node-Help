//this is callstack example
const listuser=(names)=>{
    names.forEach((value,i)=>{
        console.log(value,i);
    })
}
const myuser=['mr. rudrehs sisode','miss vaishnavi sisode','purvi rudresh sisode'];
listuser(myuser)
/*

function listuser(names){
    for(var i=0;i<names.length;i++){
        console.log(names[i])
    }
}
var user=['rudresh','sohame','priyanka','vaishnavi','shivani'];
listuser(user)*/