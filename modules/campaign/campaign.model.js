"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CampaignSchema = new mongoose_1.default.Schema({
    name: { type: String },
    description: { type: String },
    status: { type: String, enum: ['active', 'paused', 'completed'] },
    contacts: [
        {
            name: { type: String },
            phone: { type: String },
            status: { type: String, enum: ['pending', 'converted'], default: 'pending' },
        },
    ],
    messageFlow: [
        {
            message: { type: String },
            date: { type: String },
        }
    ],
}, { timestamps: true });
const Campaign = mongoose_1.default.model("Campaign", CampaignSchema);
exports.default = Campaign;
