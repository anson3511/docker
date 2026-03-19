const http = require("http");

const server = http.createServer((req,res)=>{
res.writeHead(200,{"Content-Type":"text/plain"});
res.end("hello from Node container");
});

server.listen(3000);

console.log("Node server running on port 3000");