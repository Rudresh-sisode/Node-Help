var util=require('util');
var txt='My name is %s and my age is %dth';
var result=util.format(txt,"Rudresh",21)
console.log(result)