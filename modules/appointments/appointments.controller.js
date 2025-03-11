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
exports.deleteAppointment = exports.updateAppointment = exports.getAppointmentById = exports.getAppointments = exports.createAppointment = void 0;
const appointments_service_1 = require("./appointments.service");
// Create a new Appointment
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Appointment = yield (0, appointments_service_1.createAppointmentService)(req.body);
        res.status(201).json(Appointment);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating user flow", error });
    }
});
exports.createAppointment = createAppointment;
// Get all Appointments
const getAppointments = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Appointments = yield (0, appointments_service_1.getAppointmentsService)();
        res.json(Appointments);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flows", error });
    }
});
exports.getAppointments = getAppointments;
// Get a single Appointment by ID
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Appointment = yield (0, appointments_service_1.getAppointmentByIdService)(req.params.id);
        if (!Appointment) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(Appointment);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flow", error });
    }
});
exports.getAppointmentById = getAppointmentById;
// Update a Appointment by ID
const updateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Appointment = yield (0, appointments_service_1.updateAppointmentService)(req.params.id, req.body);
        if (!Appointment) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(Appointment);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating user flow", error });
    }
});
exports.updateAppointment = updateAppointment;
// Delete a Appointment by ID
const deleteAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Appointment = yield (0, appointments_service_1.deleteAppointmentService)(req.params.id);
        if (!Appointment) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json({ message: "User flow deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting user flow", error });
    }
});
exports.deleteAppointment = deleteAppointment;
