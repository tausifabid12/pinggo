"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const EducationSchema = new mongoose_1.default.Schema({
    userName: { type: String, required: true },
    userId: { type: String, required: true },
    courses: { type: [String], required: true },
    courseFees: [
        {
            course: { type: String, required: true },
            paymentDuration: { type: Number, required: true },
            paymentCategory: { type: String, required: true },
            fees: { type: String, required: true },
        },
    ],
    brochure: [
        {
            image: { type: String, required: true },
            course: { type: String, required: true },
        },
    ],
}, { timestamps: true });
const Education = mongoose_1.default.model("Education", EducationSchema);
exports.default = Education;
