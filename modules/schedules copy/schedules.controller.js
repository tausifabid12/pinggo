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
exports.deleteSchedule = exports.updateSchedule = exports.getScheduleById = exports.getSchedules = exports.createSchedule = void 0;
const schedules_service_1 = require("./schedules.service");
// Create a new Schedule
const createSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Schedule = yield (0, schedules_service_1.createScheduleService)(req.body);
        res.status(201).json(Schedule);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating user flow", error });
    }
});
exports.createSchedule = createSchedule;
// Get all Schedules
const getSchedules = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Schedules = yield (0, schedules_service_1.getSchedulesService)();
        res.json(Schedules);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flows", error });
    }
});
exports.getSchedules = getSchedules;
// Get a single Schedule by ID
const getScheduleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Schedule = yield (0, schedules_service_1.getScheduleByIdService)(req.params.id);
        if (!Schedule) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(Schedule);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flow", error });
    }
});
exports.getScheduleById = getScheduleById;
// Update a Schedule by ID
const updateSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Schedule = yield (0, schedules_service_1.updateScheduleService)(req.params.id, req.body);
        if (!Schedule) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(Schedule);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating user flow", error });
    }
});
exports.updateSchedule = updateSchedule;
// Delete a Schedule by ID
const deleteSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Schedule = yield (0, schedules_service_1.deleteScheduleService)(req.params.id);
        if (!Schedule) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json({ message: "User flow deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting user flow", error });
    }
});
exports.deleteSchedule = deleteSchedule;
