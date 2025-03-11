"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCampaign = exports.updateCampaign = exports.getCampaignById = exports.getCampaigns = exports.createCampaign = void 0;
const campaign_service_1 = require("./campaign.service");
// Create a new Campaign
const createCampaign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Campaign = yield (0, campaign_service_1.createCampaignService)(req.body);
        res.status(201).json(Campaign);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating user flow", error });
    }
});
exports.createCampaign = createCampaign;
// Get all Campaigns
const getCampaigns = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Campaigns = yield (0, campaign_service_1.getCampaignsService)();
        res.json(Campaigns);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flows", error });
    }
});
exports.getCampaigns = getCampaigns;
// Get a single Campaign by ID
const getCampaignById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Campaign = yield (0, campaign_service_1.getCampaignByIdService)(req.params.id);
        if (!Campaign) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(Campaign);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flow", error });
    }
});
exports.getCampaignById = getCampaignById;
// Update a Campaign by ID
const updateCampaign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Campaign = yield (0, campaign_service_1.updateCampaignService)(req.params.id, req.body);
        if (!Campaign) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(Campaign);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating user flow", error });
    }
});
exports.updateCampaign = updateCampaign;
// Delete a Campaign by ID
const deleteCampaign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Campaign = yield (0, campaign_service_1.deleteCampaignService)(req.params.id);
        if (!Campaign) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json({ message: "User flow deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting user flow", error });
    }
});
exports.deleteCampaign = deleteCampaign;
