"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const campaign_controller_1 = require("./campaign.controller");
const messageScheduler_1 = require("../../middlewares/messageScheduler");
const router = express_1.default.Router();
router.post("/create", campaign_controller_1.createCampaign);
router.get("/", messageScheduler_1.checkAndSendMessages, campaign_controller_1.getCampaigns);
router.get("/:id", campaign_controller_1.getCampaignById);
router.put("/:id", campaign_controller_1.updateCampaign);
router.delete("/:id", campaign_controller_1.deleteCampaign);
exports.default = router;
