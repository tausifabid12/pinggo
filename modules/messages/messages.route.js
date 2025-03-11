"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messages_controller_1 = require("./messages.controller");
const messageScheduler_1 = require("../../middlewares/messageScheduler");
const router = express_1.default.Router();
router.post("/create", messages_controller_1.createMessage);
router.get("/", messageScheduler_1.checkAndSendMessages, messages_controller_1.getMessages);
router.get("/:id", messages_controller_1.getMessageById);
router.put("/:id", messages_controller_1.updateMessage);
router.delete("/:id", messages_controller_1.deleteMessage);
exports.default = router;
