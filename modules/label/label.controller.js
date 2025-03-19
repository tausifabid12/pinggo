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
exports.deleteLabel = exports.updateLabel = exports.getLabelById = exports.getLabels = exports.createLabel = void 0;
const label_service_1 = require("./label.service");
// Create a new Label
const createLabel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Label = yield (0, label_service_1.createLabelInDb)(req.body);
        res.status(201).json({
            success: true,
            data: Label
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error creating ", error });
    }
});
exports.createLabel = createLabel;
// Get all Labels
const getLabels = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Labels = yield (0, label_service_1.getLabelsFromDb)();
        res.status(201).json({
            success: true,
            data: Labels
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching s", error });
    }
});
exports.getLabels = getLabels;
// Get a single Label by ID
const getLabelById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Label = yield (0, label_service_1.getLabelByIdFromDb)(req.params.id);
        if (!Label) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.status(201).json({
            success: true,
            data: Label
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching ", error });
    }
});
exports.getLabelById = getLabelById;
// Update a Label by ID
const updateLabel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Label = yield (0, label_service_1.updateLabelInDb)(req.params.id, req.body);
        if (!Label) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.status(201).json({
            success: true,
            data: Label
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error updating ", error });
    }
});
exports.updateLabel = updateLabel;
// Delete a Label by ID
const deleteLabel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Label = yield (0, label_service_1.deleteLabelFromDb)(req.params.id);
        if (!Label) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json({ message: "User flow deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting ", error });
    }
});
exports.deleteLabel = deleteLabel;
