var fs = require("fs")
var buf = new Buffer(2490)

fs.open('index.html', 'r+', function(err, fd) {
   if (err) {
       return console.error(err)
   }   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err)
      }      
      if(bytes > 0){
         
         function onRequest(request, response) {
           response.writeHead(200, {"Content-Type": "html"})
           response.write(buf.slice(0, bytes))
           response.end()
         }
         http.createServer(onRequest).listen(process.env.PORT || 8080)
      }
   })
})


