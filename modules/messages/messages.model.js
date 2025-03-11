"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MessageSchema = new mongoose_1.default.Schema({
    senderNumber: { type: String },
    senderName: { type: String },
    receiverNumber: { type: String },
    userPhoneNumberId: { type: String },
    messages: [
        {
            messageId: { type: String },
            messageText: { type: String, default: '' },
            audioUrl: { type: String, default: '' },
            videoUrl: { type: String, default: '' },
            imageUrl: { type: String, default: '' },
            isEcho: { type: Boolean },
            isTemplate: { type: Boolean }
        }
    ]
}, { timestamps: true });
const Message = mongoose_1.default.model("Message", MessageSchema);
exports.default = Message;
