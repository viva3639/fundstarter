var fs = require('fs')
var http = require('http')
var buf = new Buffer(2490);

function readHtml(callback) {
  fs.open("index.html", 'r+', function(err, fd)       
  {
    if (err) return callback(err)
    
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes)
    {
       if (err) return callback(err)
       callback(null, buf.slice(0, bytes))         
    })
  })
}

readHtml(function(err, content) {
  function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "html"})
    response.write(content)
    response.end()
  }
  http.createServer(onRequest).listen(process.env.PORT || 8080)
})

