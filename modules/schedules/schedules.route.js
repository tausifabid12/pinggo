"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const schedules_controller_1 = require("./schedules.controller");
const router = express_1.default.Router();
router.post("/create", schedules_controller_1.createSchedule);
router.post("/bulk-create", schedules_controller_1.createBlukSchedule);
router.get("/", schedules_controller_1.getSchedules);
router.get("/:id", schedules_controller_1.getScheduleById);
router.put("/:id", schedules_controller_1.updateSchedule);
router.delete("/:id", schedules_controller_1.deleteSchedule);
exports.default = router;
