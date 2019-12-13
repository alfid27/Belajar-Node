const express = require ('express');
const path = require ('path');
const bodyParser = require ('body-parser');

const app = express ();
app.set ('view engine', 'ejs');
app.set ('views', 'view');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./router/router')(app)

app.listen(8000, () => {
    console.log("server berjalan pada port 8000")
})