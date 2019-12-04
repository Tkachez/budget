const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    option: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true,
        minValue: 0.01
    },
    comment: String
}, {
    timestamps: true
});

module.exports = transactionSchema;