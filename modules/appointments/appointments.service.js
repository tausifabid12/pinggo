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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppointmentService = exports.updateAppointmentService = exports.getAppointmentByIdService = exports.getAppointmentsService = exports.createAppointmentService = void 0;
const appointments_model_1 = __importDefault(require("./appointments.model"));
// Create a new Appointment
const createAppointmentService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield appointments_model_1.default.create(data);
});
exports.createAppointmentService = createAppointmentService;
// Get all Appointments
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield appointments_model_1.default.find();
});
exports.getAppointmentsService = getAppointmentsService;
// Get a single Appointment by ID
const getAppointmentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield appointments_model_1.default.findById(id);
});
exports.getAppointmentByIdService = getAppointmentByIdService;
// Update a Appointment by ID
const updateAppointmentService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield appointments_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
exports.updateAppointmentService = updateAppointmentService;
// Delete a Appointment by ID
const deleteAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield appointments_model_1.default.findByIdAndDelete(id);
});
exports.deleteAppointmentService = deleteAppointmentService;
