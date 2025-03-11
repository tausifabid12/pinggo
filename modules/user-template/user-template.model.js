"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserFlowSchema = new mongoose_1.default.Schema({
    userId: { type: String },
    userName: { type: String },
    flowName: { type: String },
    flowType: { type: String, enum: ['dynamic', 'static'] },
    flowJson: { type: String },
}, { timestamps: true });
const UserFlow = mongoose_1.default.model("UserFlow", UserFlowSchema);
exports.default = UserFlow;
