"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ScheduleSchema = new mongoose_1.default.Schema({
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    date: { type: [String], required: true },
    availableSchedules: { type: [String], required: true },
    departments: { type: [String], required: true },
    location: { type: [String], required: true }
}, { timestamps: true });
const Schedule = mongoose_1.default.model("Schedule", ScheduleSchema);
exports.default = Schedule;
