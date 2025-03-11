"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_template_controller_1 = require("./user-template.controller");
const router = express_1.default.Router();
router.post("/create", user_template_controller_1.createUserFlow);
router.get("/", user_template_controller_1.getUserFlows);
router.get("/:id", user_template_controller_1.getUserFlowById);
router.put("/:id", user_template_controller_1.updateUserFlow);
router.delete("/:id", user_template_controller_1.deleteUserFlow);
exports.default = router;
