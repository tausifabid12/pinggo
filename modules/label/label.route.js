"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const label_controller_1 = require("./label.controller");
const router = express_1.default.Router();
router.post("/create", label_controller_1.createLabel);
router.get("/", label_controller_1.getLabels);
router.get("/:id", label_controller_1.getLabelById);
router.post("/:id", label_controller_1.updateLabel);
router.delete("/:id", label_controller_1.deleteLabel);
exports.default = router;
