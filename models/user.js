const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uuid: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    emailVerificationCode: {
        type: String,
        default: null,
    },
    emailVerificationExpiry: {
        type: Date,
        default: null,
    },
    resetPasswordCode: {
        type: String,
        default: null,
    },
    resetPasswordExpiry: {
        type: Date,
        default: null,
    },
    MFAStatus: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);
