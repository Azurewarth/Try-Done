var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200);
    response.write('Dog is running');
    console.log('Dog is running');
    setTimeout(function(){
        response.write('Dog is Done');
        console.log('Dog is Done');
        response.end();
    },5000);
}).listen(8080);