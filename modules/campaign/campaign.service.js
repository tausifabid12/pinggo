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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCampaignService = exports.updateCampaignService = exports.getCampaignByIdService = exports.getCampaignsService = exports.createCampaignService = void 0;
const campaign_model_1 = __importDefault(require("./campaign.model"));
// Create a new Campaign
const createCampaignService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(data);
        return yield campaign_model_1.default.create(data);
    }
    catch (e) {
        console.log(e);
    }
});
exports.createCampaignService = createCampaignService;
// Get all Campaigns
const getCampaignsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield campaign_model_1.default.find();
});
exports.getCampaignsService = getCampaignsService;
// Get a single Campaign by ID
const getCampaignByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield campaign_model_1.default.findById(id);
});
exports.getCampaignByIdService = getCampaignByIdService;
// Update a Campaign by ID
const updateCampaignService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield campaign_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
exports.updateCampaignService = updateCampaignService;
// Delete a Campaign by ID
const deleteCampaignService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield campaign_model_1.default.findByIdAndDelete(id);
});
exports.deleteCampaignService = deleteCampaignService;
