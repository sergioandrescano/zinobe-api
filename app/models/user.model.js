const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    id: {
        type: String,
        unique: true,
        required: true
    },
    requestValue: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: Date,
        required: true
    },
    creditState: {
        type: String,
        required: true,
        enum: ['Aprobado','Rechazado']
    },
    finishCredit: {
        type: Boolean
    }
});

const User = mongoose.model('User',UserSchema);
module.exports = User;