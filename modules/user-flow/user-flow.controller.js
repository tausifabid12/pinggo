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
exports.deleteUserFlow = exports.updateUserFlow = exports.getUserFlowById = exports.getUserFlows = exports.createUserFlow = void 0;
const user_flow_service_1 = require("./user-flow.service");
// Create a new UserFlow
const createUserFlow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFlow = yield (0, user_flow_service_1.createUserFlowService)(req.body);
        res.status(201).json(userFlow);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating user flow", error });
    }
});
exports.createUserFlow = createUserFlow;
// Get all UserFlows
const getUserFlows = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFlows = yield (0, user_flow_service_1.getUserFlowsService)();
        res.json(userFlows);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flows", error });
    }
});
exports.getUserFlows = getUserFlows;
// Get a single UserFlow by ID
const getUserFlowById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFlow = yield (0, user_flow_service_1.getUserFlowByIdService)(req.params.id);
        if (!userFlow) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(userFlow);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flow", error });
    }
});
exports.getUserFlowById = getUserFlowById;
// Update a UserFlow by ID
const updateUserFlow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFlow = yield (0, user_flow_service_1.updateUserFlowService)(req.params.id, req.body);
        if (!userFlow) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(userFlow);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating user flow", error });
    }
});
exports.updateUserFlow = updateUserFlow;
// Delete a UserFlow by ID
const deleteUserFlow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFlow = yield (0, user_flow_service_1.deleteUserFlowService)(req.params.id);
        if (!userFlow) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json({ message: "User flow deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting user flow", error });
    }
});
exports.deleteUserFlow = deleteUserFlow;
