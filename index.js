var fs = require('fs')
var http = require('http')

function readHtml(callback) {
  fs.readFile("./index.html", "utf8", function read(err, content) {
    if (err) return callback(err)
    callback(null, content)
  })
}

readHtml(function(err, content) {
   return content
})

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "html"})

  response.write(readHtml)
  response.end()
}

http.createServer(onRequest).listen(process.env.PORT || 8080)

