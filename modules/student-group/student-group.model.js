"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const StudentGroupSchema = new mongoose_1.default.Schema({
    groupName: { type: String, required: true },
    contacts: [
        {
            phone: { type: String, required: true },
            name: { type: String, required: true },
        },
    ],
}, { timestamps: true });
const StudentGroup = mongoose_1.default.model("StudentGroup", StudentGroupSchema);
exports.default = StudentGroup;
