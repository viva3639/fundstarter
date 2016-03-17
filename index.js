var fs = require('fs')

function readHtml(callback) {
  fs.readFile("./index.html", "utf8", function read(err, content) {
    if (err) return callback(err)
    callback(null, content)
  })
}

readHtml(function(err, content) {
   console.log(content)
})

