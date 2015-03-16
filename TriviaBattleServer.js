var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "html/";
var readline = require('readline');





http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false);
  
  var myRe = new RegExp("^"+urlObj.query["q"]);


	if(urlObj.pathname.indexOf("submitAnswer") !=-1) {
    	console.log("submitQuestions route");
    	if(req.method === "POST") {
    	
			var jsonData = "";
			req.on('data', function (chunk) {
			jsonData += chunk;
     		 });
			req.on('end', function () {
       	var reqObj = JSON.parse(jsonData);
        
        
          //var MongoClient = require('mongodb').MongoClient;
       // MongoClient.connect("mongodb://localhost/weather", function(err, db) {
        // if(err) throw err;
         // db.collection('questions').insert(reqObj,function(err, records) {
           // console.log("Record added as "+records[0]._id);
          });
        });
        
        
        res.writeHead(200);
        res.end("");
        
   
        
        console.log(reqObj);
        console.log("Name: "+reqObj.Name);
        console.log("Comment: "+reqObj.Comment);
      });




}}



	if(urlObj.pathname.indexOf("questions") !=-1) {
    	console.log("get questions route");
    	if(req.method === "POST") {
    	
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
        });
        
        
        res.writeHead(200);
        res.end("");
        
   
        
        console.log(reqObj);
        console.log("Name: "+reqObj.Name);
        console.log("Comment: "+reqObj.Comment);
      });

   		 }
   		 if(req.method ==="GET")
   		 	{console.log("In the get");
   		 	
   		 	var MongoClient = require('mongodb').MongoClient;
    		 setTimeout( MongoClient.connect("mongodb://localhost/weather", function(err, db) {
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
              console.log("Done");
     
               });
            
        
          });
        });
      }), 5000);
   		 	
   		 	
   		 	
   		 	}
 	 }
  
 else  if(urlObj.pathname.indexOf("getcity") !=-1) {
  		 fs.readFile('cities.dat.txt', function (err, data) {
 		 if(err) throw err;
 		 cities = data.toString().split("\n");
  var jsonresult = [];
      for(var i = 0; i < cities.length; i++) {
        var result = cities[i].search(myRe); 
        if(result != -1) {
          
          jsonresult.push({city:cities[i]});
        } 
      }   
     console.log(JSON.stringify(jsonresult));
res.writeHead(200);
res.end(JSON.stringify(jsonresult));


});
   console.log("In REST Service");
 } else if(urlObj.pathname.indexOf(".jpg") !=-1 || urlObj.pathname.indexOf("gif") !=-1 ){
 	var path = "."+urlObj.pathname;
 	console.log("THIS IS AN IMAGE");
 	console.log(path);
    fs.readFile(path, function (err,data) {
  


   	 if (err) {
  	  console.log("ERROR");
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    else
    {
    res.writeHead(200, {"Content-Type":"image/gif" });
	res.end(data, 'binary');
    }

  }
   
 
  
  
 );}
 else
 	{
 	var path = "."+urlObj.pathname;
 	console.log(path);
    fs.readFile(path, function (err,data) {
  


   	 if (err) {
  	  console.log("ERROR");
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    else
    {
    res.writeHead(200);
res.end(data);
    }

  }
   
 
  
  
 );
 	
 	
 	}
 
 
 
}).listen(80);

