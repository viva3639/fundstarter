var express = require('express')
var app1 = express()

/* serves all the static files*/
app1.set('port', (process.env.PORT || 8080))
app1.use(express.static(__dirname + '/public'))

/*serves main page*/
app1.get('/', function(request, response) {
response.sendfile('index.html')
})

app1.listen(app1.get('port'), function() {
  console.log("Node app is running at localhost:" + app1.get('port'))
})

