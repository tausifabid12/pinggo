"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_group_controller_1 = require("./student-group.controller");
const router = express_1.default.Router();
router.post("/create", student_group_controller_1.createStudentGroup);
router.post("/bulk-create", student_group_controller_1.createBlukStudentGroup);
router.get("/", student_group_controller_1.getStudentGroups);
router.get("/:id", student_group_controller_1.getStudentGroupById);
router.put("/:id", student_group_controller_1.updateStudentGroup);
router.delete("/:id", student_group_controller_1.deleteStudentGroup);
exports.default = router;
