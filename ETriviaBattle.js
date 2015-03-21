
var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');
var http = require('http');
var fs = require('fs');
var url = require('url');
var app = express();
var options = {
    host: '52.11.131.175',
    key: fs.readFileSync('ssl/server.key'),
    cert: fs.readFileSync('ssl/server.crt')
};
 
  
    http.createServer(app).listen(80);
  https.createServer(options, app).listen(443);
  
  
  
  app.get('/', function (req, res) {
    res.send("Get Index");
  });
  
  
  
  app.use('/', express.static('./html', {maxAge: 60*60*1000}));
  
  
  
  
  
  
  
  
  app.get('/login', function(req,res)
  {
  
  
    var jsonData = "";
     	 req.on('data', function (chunk) {
       	 jsonData += chunk;
     		 });
      	req.on('end', function () {
        var reqObj = JSON.parse(jsonData);
  
  
  
  
 			var MongoClient = require('mongodb').MongoClient;
    		MongoClient.connect("mongodb://localhost/weather", function(err, db) {
       		 if(err) throw err;
       		 db.collection("users", function(err, questions){
          	if(err) throw err;
        	
        	questions.find(function(err, items){
        	items.toArray(function(err, itemArr){
        	var foundUser = false;
        
        // THIS COULD VERY WELL BE BROKEN
        	 for(var i = 0; i <length; i++) {
   				if(itemArr[i].password == reqObj.password && itemArr[i] == reqObj.username)
         			{
       			 	 res.writeHead(200);
             		 console.log(jsonresult);
              
              
             		 res.end(JSON.stringify(itemArr[i]));
 
       			    }
       			    
       		}
       			 res.writeHead(200);
       			 res.end("");
 
  });
  
  
  
  
  
  
  
 app.get('/questionBatch', function (req, res) {
 
 
 
 
  			var MongoClient = require('mongodb').MongoClient;
    		MongoClient.connect("mongodb://localhost/weather", function(err, db) {
       		 if(err) throw err;
       		 db.collection("questions", function(err, questions){
          	if(err) throw err;
        	
        	questions.find(function(err, items){
        	items.toArray(function(err, itemArr){
        	
        	
        	
        	 var jsonresult = [];
        	 
        	 var length = 6;
        	 if(itemArr.length < 6)
        	 	{length = itemArr.length;}
        	 
        	 for(var i = 0; i <length; i++) {
   			
         			 jsonresult.push(itemArr[i]);
       			 }
       			 
              console.log("Document Array: ");
            
              res.writeHead(200);
              console.log(jsonresult);
              
              
              res.end(JSON.stringify(jsonresult));
 
 
  });
  });
  });
 
 
 
 app.post('/submitAnswer', function (req, res) {
 
 var jsonData = "";
			req.on('data', function (chunk) {
			jsonData += chunk;
     		 });
			req.on('end', function () {
       	var reqObj = JSON.parse(jsonData);
        

          });
        });
        
        
        res.writeHead(200);
        res.end("");
 
 }
 
 

 app.get('/finishRound', function (req, res) {
 
 var jsonData = "";
			req.on('data', function (chunk) {
			jsonData += chunk;
     		 });
			req.on('end', function () {
       	var reqObj = JSON.parse(jsonData);
        

          });
        });
        
        
        res.writeHead(200);
        res.end("");
 
 }
 
 
  app.post('/submitNewQuestion', function (req, res) {
  
  
   var urlObj = url.parse(req.url, true, false);
  
  var myRe = new RegExp("^"+urlObj.query["q"]);
    
    
   
    	var jsonData = "";
			req.on('data', function (chunk) {
			jsonData += chunk;
     		 });
			req.on('end', function () {
       var reqObj = JSON.parse(jsonData);
        
        
          var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect("mongodb://localhost/weather", function(err, db) {
          if(err) throw err;
          db.collection('questions').insert(reqObj,function(err, records) {
            console.log("Record added as "+records[0]._id);
          });
   
    
    
    //console.log("In POST comment route");
   // console.log(req.user);
   // console.log("Remote User");
   // console.log(req.remoteUser);
    res.status(200);
    res.end();
  });
 

 
 
 
 
 