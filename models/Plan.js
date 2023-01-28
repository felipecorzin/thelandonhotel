const { Schema, model } = require('mongoose');

const PlanSchema = Schema({
    name: {
        type: String,
    },
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
    },
});

PlanSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

PlanSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('Plan', PlanSchema );