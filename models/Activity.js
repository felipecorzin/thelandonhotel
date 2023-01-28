const { Schema, model } = require('mongoose');

const ActivitySchema = Schema({
    nombre: {
        type: String,
    },
    fecha: {
        type: String,
    },
    hora: {
        type: String,
    },
    img: {
        type: String
    }
});

ActivitySchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Activity',ActivitySchema );