"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const opt_model_1 = require("./opt.model");
const router = express_1.default.Router();
router.post("/create", opt_model_1.createFacebookOtp);
// router.get("/", authenticateUser, getAllUsers);
router.get("/", opt_model_1.getFacebookOtps);
router.delete("/", opt_model_1.deleteAllFacebookOtps);
exports.default = router;
