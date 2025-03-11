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
exports.deleteScheduleService = exports.updateScheduleService = exports.getScheduleByIdService = exports.getSchedulesService = exports.createBlukScheduleService = exports.createScheduleService = void 0;
const schedules_model_1 = __importDefault(require("./schedules.model"));
// Create a new Schedule
const createScheduleService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield schedules_model_1.default.create(data);
});
exports.createScheduleService = createScheduleService;
const createBlukScheduleService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(data, 'pppppppppppppppppppp');
        return yield schedules_model_1.default.insertMany(data, { ordered: false }); // Continues inserting even if one fails
    }
    catch (error) {
        console.error("Bulk insert failed:", error);
        throw error;
    }
});
exports.createBlukScheduleService = createBlukScheduleService;
// Get all Schedules
const getSchedulesService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield schedules_model_1.default.find();
});
exports.getSchedulesService = getSchedulesService;
// Get a single Schedule by ID
const getScheduleByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield schedules_model_1.default.findById(id);
});
exports.getScheduleByIdService = getScheduleByIdService;
// Update a Schedule by ID
const updateScheduleService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield schedules_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
exports.updateScheduleService = updateScheduleService;
// Delete a Schedule by ID
const deleteScheduleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield schedules_model_1.default.findByIdAndDelete(id);
});
exports.deleteScheduleService = deleteScheduleService;
