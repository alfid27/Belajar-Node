var http = require ('http')

function hitung (angka1, angka2) {
    var jumlah = angka1 * angka2 
    var hasil = `${angka2} * ${angka2} = ${jumlah}`
    return hasil;
}

var server = http.createServer(function (req, res) {
    res.end(hitung(5,2))
});

server.listen(8000);


console.log ("Server Berjalan di port 8000")