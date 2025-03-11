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
exports.deleteMedcalBusiness = exports.updateMedcalBusiness = exports.getMedcalBusinessById = exports.getMedcalBusinesss = exports.createMedcalBusiness = void 0;
const medical_service_1 = require("./medical.service");
// Create a new MedcalBusiness
const createMedcalBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const MedcalBusiness = yield (0, medical_service_1.createMedcalBusinessService)(req.body);
        res.status(201).json(MedcalBusiness);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating user flow", error });
    }
});
exports.createMedcalBusiness = createMedcalBusiness;
// Get all MedcalBusinesss
const getMedcalBusinesss = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const MedcalBusinesss = yield (0, medical_service_1.getMedcalBusinesssService)();
        res.json(MedcalBusinesss);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flows", error });
    }
});
exports.getMedcalBusinesss = getMedcalBusinesss;
// Get a single MedcalBusiness by ID
const getMedcalBusinessById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const MedcalBusiness = yield (0, medical_service_1.getMedcalBusinessByIdService)(req.params.id);
        if (!MedcalBusiness) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(MedcalBusiness);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flow", error });
    }
});
exports.getMedcalBusinessById = getMedcalBusinessById;
// Update a MedcalBusiness by ID
const updateMedcalBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const MedcalBusiness = yield (0, medical_service_1.updateMedcalBusinessService)(req.params.id, req.body);
        if (!MedcalBusiness) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(MedcalBusiness);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating user flow", error });
    }
});
exports.updateMedcalBusiness = updateMedcalBusiness;
// Delete a MedcalBusiness by ID
const deleteMedcalBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const MedcalBusiness = yield (0, medical_service_1.deleteMedcalBusinessService)(req.params.id);
        if (!MedcalBusiness) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json({ message: "User flow deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting user flow", error });
    }
});
exports.deleteMedcalBusiness = deleteMedcalBusiness;
