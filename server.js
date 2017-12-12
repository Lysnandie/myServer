//Require/import HTTP module
var http = require("http");

//Defines a port to listen for incoming requests
var PORT1 = 7000;

var PORT2 = 7500;
//creates a generic function to handle requests and responses
function handleRequest1(request, response){

  //send the below string to the client when the user visits the PORT1 URL
  response.end("You are awesome! This works: " + request.url);
}

function handleRequest2(request, response){
  response.end("You are terrible, but it works! " + request.url);
}

var server1 = http.createServer(handleRequest1);

var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function(){
  console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function(){
  console.log("Server listening on: http://localhost:" + PORT2);
});
