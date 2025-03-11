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
exports.deleteStudentGroup = exports.updateStudentGroup = exports.getStudentGroupById = exports.getStudentGroups = exports.createBlukStudentGroup = exports.createStudentGroup = void 0;
const student_group_service_1 = require("./student-group.service");
// Create a new StudentGroup
const createStudentGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const StudentGroup = yield (0, student_group_service_1.createStudentGroupService)(req.body);
        res.status(201).json(StudentGroup);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating user flow", error });
    }
});
exports.createStudentGroup = createStudentGroup;
// Create a Bulk StudentGroup
const createBlukStudentGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const StudentGroup = yield (0, student_group_service_1.createBlukStudentGroupService)(req.body);
        console.log(StudentGroup, '|||||||||||||||||||||||||||||||||');
        res.status(201).json(StudentGroup);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating user flow", error });
    }
});
exports.createBlukStudentGroup = createBlukStudentGroup;
// Get all StudentGroups
const getStudentGroups = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const StudentGroups = yield (0, student_group_service_1.getStudentGroupsService)();
        res.json(StudentGroups);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flows", error });
    }
});
exports.getStudentGroups = getStudentGroups;
// Get a single StudentGroup by ID
const getStudentGroupById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const StudentGroup = yield (0, student_group_service_1.getStudentGroupByIdService)(req.params.id);
        if (!StudentGroup) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(StudentGroup);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flow", error });
    }
});
exports.getStudentGroupById = getStudentGroupById;
// Update a StudentGroup by ID
const updateStudentGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const StudentGroup = yield (0, student_group_service_1.updateStudentGroupService)(req.params.id, req.body);
        if (!StudentGroup) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(StudentGroup);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating user flow", error });
    }
});
exports.updateStudentGroup = updateStudentGroup;
// Delete a StudentGroup by ID
const deleteStudentGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const StudentGroup = yield (0, student_group_service_1.deleteStudentGroupService)(req.params.id);
        if (!StudentGroup) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json({ message: "User flow deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting user flow", error });
    }
});
exports.deleteStudentGroup = deleteStudentGroup;
