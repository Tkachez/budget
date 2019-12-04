const mongoose = require('mongoose');
const transactionSchema = require('./transaction.module');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  profileImage: String,
  transactions: [transactionSchema]
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;