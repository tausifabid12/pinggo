"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ScheduleSchema = new mongoose_1.default.Schema({
    branch: { type: String },
    hospitalName: { type: String },
    department: { type: String },
    doctor: { type: String },
    date: { type: String },
    startTime: { type: String },
    endTime: { type: String },
    userId: { type: String },
    userName: { type: String }
}, { timestamps: true });
const Schedule = mongoose_1.default.model("Schedule", ScheduleSchema);
exports.default = Schedule;
