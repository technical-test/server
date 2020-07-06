const mongoose = require('mongoose');

const Holiday = mongoose.Schema({
    dia: {
        type: Number,
        required: true,
        trim: true
    },
    info: {
        type: String,
        required: true,
        trim: true    
    },
    mes: {
        type: Number,
        required: true,
        trim: true
    },
    motivo:{
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        required: true,
        trim: true

    },
    _ids: {
        type: String,
        required: true,
        trim: true,
        unique: true

    },
    id:{
        type:String,
        required: true,
        trim: true
    }


});

module.exports = mongoose.model('Holiday', Holiday);