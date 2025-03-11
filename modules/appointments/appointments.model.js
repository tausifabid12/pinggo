"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// const AppointmentSchema = new mongoose.Schema<IAppointment>(
//     {
//         name: { type: String, required: true },
//         email: { type: String, required: true },
//         phone: { type: String, required: true },
//         note: { type: String, required: false },
//         time: { type: String, required: true },
//         date: { type: String, required: true },
//         location: { type: String, required: true },
//         department: { type: String, required: true }
//     },
//     { timestamps: true }
// );
const AppointmentSchema = new mongoose_1.default.Schema({
    data: { type: String, required: true },
    userId: { type: String, required: true },
    flowName: { type: String, required: true },
}, { timestamps: true });
const Appointment = mongoose_1.default.model("Appointment", AppointmentSchema);
exports.default = Appointment;
