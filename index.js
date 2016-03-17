var fs = require('fs')

var data = fs.readFileSync('index.html')

data.listen(8080, function() {
  console.log("Node app is running at localhost:" + 8080)
})

