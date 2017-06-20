//Basic server implementation in Node
//Author:Jithin Zacharia
//Date:20 June 2017
//Title: Can serve pages
var server=require('http');
server.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('Welcome to Blockchain App');
}).listen(8000);
console.log("Server running at port 8000");
