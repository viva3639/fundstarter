var fs = require('fs')
var http = require('http')

function readHtml(callback) {
  fs.readFile("./index.html", "utf8", function read(err, content) {
    if (err) return callback(err)
    callback(null, content)
  })
}

readHtml(function(err, content) {
  response.writeHead(200, {"Content-Type": "html"})

  response.write(content)
  response.end()
})


http.createServer(readHtml).listen(process.env.PORT || 8080)
