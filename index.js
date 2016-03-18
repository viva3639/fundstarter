var fs = require('fs')
var http = require('http')

var data = fs.readFileSync('index.html')

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "html"})
  response.write(data)
  response.end()
}

http.createServer(onRequest).listen(process.env.PORT || 8080)

