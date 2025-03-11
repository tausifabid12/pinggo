"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medical_controller_1 = require("./medical.controller");
const router = express_1.default.Router();
router.post("/create", medical_controller_1.createMedcalBusiness);
router.get("/", medical_controller_1.getMedcalBusinesss);
router.get("/:id", medical_controller_1.getMedcalBusinessById);
router.put("/:id", medical_controller_1.updateMedcalBusiness);
router.delete("/:id", medical_controller_1.deleteMedcalBusiness);
exports.default = router;
