const express = require('express');
const bodyParser=require('body-parser');


var db=require('./db')
var user=require('./module/user');
const app=express();
const port=process.env.PORT || 8080;