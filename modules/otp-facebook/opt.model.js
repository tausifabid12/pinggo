"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllFacebookOtps = exports.getFacebookOtps = exports.createFacebookOtp = exports.FacebookOtp = void 0;
const mongoose = require('mongoose');
const FacebookOtpSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.FacebookOtp = mongoose.model('FacebookOtp', FacebookOtpSchema);
// Controller function to create a new OTP entry
const createFacebookOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, otp } = req.body;
        const newOtp = new exports.FacebookOtp({ date, time, otp });
        yield newOtp.save();
        return res.status(201).json({ message: 'OTP created successfully', data: newOtp });
    }
    catch (error) {
        return res.status(500).json({ message: 'Error creating OTP', error: error.message });
    }
});
exports.createFacebookOtp = createFacebookOtp;
// Controller function to get all OTP entries sorted by latest first
const getFacebookOtps = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const otps = yield exports.FacebookOtp.find().sort({ createdAt: -1 });
        return res.status(200).json({ data: otps });
    }
    catch (error) {
        return res.status(500).json({ message: 'Error fetching OTPs', error: error.message });
    }
});
exports.getFacebookOtps = getFacebookOtps;
const deleteAllFacebookOtps = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.FacebookOtp.deleteMany({});
        return res.status(200).json({ message: 'All OTPs deleted successfully' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Error deleting OTPs', error: error.message });
    }
});
exports.deleteAllFacebookOtps = deleteAllFacebookOtps;
