const express=require('express');
const chalk=require('chalk')
var app=express();

console.log(chalk.yellow('Database connected successfully'))
console.log(process.argv)