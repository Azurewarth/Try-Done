var http = require('http');
var fs = require('fs');


http.createServer(function(request,response){
    
    var newFile = fs.createWriteStream('readme_copy.png');
    var fileBytes = request.headers['content-length'];
    var uploadBytes = 0;
    
    request.pipe(newFile);
    
    request.on('data',function(chunk) {
        
        uploadBytes += chunk.length;
        var progress = (uploadBytes / fileBytes)*100;
        
        response.write("progress:"+ parseInt(progress,10)+ "%\n");   
    });
               
}).listen(8080);