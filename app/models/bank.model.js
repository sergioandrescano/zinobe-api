const mongoose = require('mongoose');

const BankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        unique: true
    },
    totalAccount: {
        type: Number,
    },
    available: {
        type: Boolean,
    },
});

const Bank = mongoose.model('Bank',BankSchema);

module.exports = Bank;