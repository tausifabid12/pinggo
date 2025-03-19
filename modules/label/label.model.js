"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const LabelSchema = new mongoose_1.default.Schema({
    userId: { type: String, required: true },
    label: { type: String, required: true },
    color: { type: String, required: true }
}, { timestamps: true });
const Label = mongoose_1.default.model("Label", LabelSchema);
exports.default = Label;
