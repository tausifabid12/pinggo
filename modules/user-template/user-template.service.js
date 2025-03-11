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
exports.deleteUserFlowService = exports.updateUserFlowService = exports.getUserFlowByIdService = exports.getUserFlowsService = exports.createUserFlowService = void 0;
const user_template_model_1 = __importDefault(require("./user-template.model"));
// Create a new UserFlow
const createUserFlowService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_template_model_1.default.create(data);
});
exports.createUserFlowService = createUserFlowService;
// Get all UserFlows
const getUserFlowsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_template_model_1.default.find();
});
exports.getUserFlowsService = getUserFlowsService;
// Get a single UserFlow by ID
const getUserFlowByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_template_model_1.default.findById(id);
});
exports.getUserFlowByIdService = getUserFlowByIdService;
// Update a UserFlow by ID
const updateUserFlowService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_template_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
exports.updateUserFlowService = updateUserFlowService;
// Delete a UserFlow by ID
const deleteUserFlowService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_template_model_1.default.findByIdAndDelete(id);
});
exports.deleteUserFlowService = deleteUserFlowService;
