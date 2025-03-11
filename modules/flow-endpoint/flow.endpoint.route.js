"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const flow_controller_1 = require("./flow.controller");
const router = express_1.default.Router();
router.post("/", flow_controller_1.generateFlow);
router.post("/webhook", flow_controller_1.handleEndPointData);
router.post("/create-flow", flow_controller_1.handleCreateFlow);
exports.default = router;
