"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const education_controller_1 = require("./education.controller");
const router = express_1.default.Router();
router.post("/create", education_controller_1.createEducation);
router.get("/", education_controller_1.getEducations);
router.get("/:id", education_controller_1.getEducationById);
router.put("/:id", education_controller_1.updateEducation);
router.delete("/:id", education_controller_1.deleteEducation);
exports.default = router;
