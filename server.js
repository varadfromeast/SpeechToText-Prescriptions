  const express = require('express');
const app = express();
const nodemailer=require('nodemailer');
var path = require('path');
var fs= require('fs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/speech2text'));



app.listen(3000, ()=>{
	console.log("server started");
	console.log(__dirname);
	
});

app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/index1.html');  
})











 
   
