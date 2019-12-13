var http = require('http')
let data_array = [10,20,30]
let data_object = {
    'Nama' : 'Alfid',
    'Kursus' : 'FullStack',
    'rating' : '10'
}

var server = http.createServer(function (req, res) {
    res.end("Hello World");
});

server.listen(8000);

console.log("Server berjarlan di localhost:8000");
console.log (data_array[0]);
console.log (data_object.Nama);

let JSON_data = JSON.stringify(data_object);