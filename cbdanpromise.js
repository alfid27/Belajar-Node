var http = require ('http');

function kuadrat(nilai, ceknilai) {
    let hasil = nilai  * nilai
    let error = null

    if (hasil === 0)
        error = 'error';

    ceknilai(error,hasil);
}

let ceknilai = function (error,hasil) {
    if (error)
        console.error(error);
    else
        console.log(hasil);
}

var server = http.createServer(function (req, res) {
    res.end(kuadrat (nilai, ceknilai));
});

server.listen(8000)


console.log ("Server Berjalan di port 8000")