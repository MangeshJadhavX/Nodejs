 
//todo:-  we make the simple http server using express in node js


 //what is diff in read.fs and express (read.fs is build in node  js you just want to require it )
 //(and the express is bring to internet and delate to our program program)

 
 const express = require("express"); // this library is exits is node js  package

 const app = express()
 const port = 3000
 
 app.get('/', function(req, res){
   res.send('Hello World!')
 })
 
 app.listen(port);