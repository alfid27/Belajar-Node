var http = require ('http')

function panggilaku() {
    var hasil = "Aku adalah Alfid"
    return hasil;
}

var server = http.createServer(function (req, res) {
    res.end(panggilaku())

});

server.listen(8000)

console.log("Server berjalanan di port 8000")