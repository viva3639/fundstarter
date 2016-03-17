var fs = require('fs')
var app = fs()

/* serves all the static files*/
app.set('port', (process.env.PORT || 8080))
app.use(fs.static(__dirname + '/public'))

/*serves main page*/
app.get('/', function(request, fs) {
fs.readfileSync('index.html')
})

app.listen(port, function() {
  console.log("Node app is running at localhost:" + port)
})

