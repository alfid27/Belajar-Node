var http = require ('http')

function hitung (angka1, angka2) {
    var jumlah = angka1 * angka2 
    var hasil = `${angka1} * ${angka2} = ${jumlah}`
    return hasil;
}

const cb = (hitung)=> {
    console.log("ini callback");
    
    return cb;
}

var server = http.createServer(function (req, res) {
    res.end(cb(5,2))
});

server.listen(8000);

console.log(hitung())


console.log ("Server Berjalan di port 8000")