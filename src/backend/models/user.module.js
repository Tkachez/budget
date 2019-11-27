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