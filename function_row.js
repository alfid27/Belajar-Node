var http = require ('http')

//Function row-1

const hitung = (angka1,angka2) => {
    let jumlah = angka1 * angka2 
    var hasil = `${angka1} * ${angka2} = ${jumlah}`
    return hasil;
}

// //Function row-2

// const hitung = (angka1,angka2) => angka1 * angka2


// //function row-3

// const hitung = angka => angka * angka

var server = http.createServer(function(req, res) {
    res.end(hitung(5,4))
});

server.listen(8000)

console.log("server berjalan di port 8000")