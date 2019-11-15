const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  option: { type: String, required: true },
  value: { type: String, required: true },
  comment: { type: String, required: false }
}, {
  timestamps: true
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;