var mongoose = require ('mongoose');

var PageSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },

    link : {
        type: String
    },

    Content: {
        type: String,
        require: true
    },

    sorting: {
        type: Number
    }
});


var Pages = modul.exports = mongoose.model('Pages', PageSchema);