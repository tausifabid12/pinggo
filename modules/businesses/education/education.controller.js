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
exports.deleteEducation = exports.updateEducation = exports.getEducationById = exports.getEducations = exports.createEducation = void 0;
const education_service_1 = require("./education.service");
// Create a new Education
const createEducation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Education = yield (0, education_service_1.createEducationService)(req.body);
        res.status(201).json(Education);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating user flow", error });
    }
});
exports.createEducation = createEducation;
// Get all Educations
const getEducations = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Educations = yield (0, education_service_1.getEducationsService)();
        res.json(Educations);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flows", error });
    }
});
exports.getEducations = getEducations;
// Get a single Education by ID
const getEducationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Education = yield (0, education_service_1.getEducationByIdService)(req.params.id);
        if (!Education) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(Education);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flow", error });
    }
});
exports.getEducationById = getEducationById;
// Update a Education by ID
const updateEducation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Education = yield (0, education_service_1.updateEducationService)(req.params.id, req.body);
        if (!Education) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(Education);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating user flow", error });
    }
});
exports.updateEducation = updateEducation;
// Delete a Education by ID
const deleteEducation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Education = yield (0, education_service_1.deleteEducationService)(req.params.id);
        if (!Education) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json({ message: "User flow deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting user flow", error });
    }
});
exports.deleteEducation = deleteEducation;
