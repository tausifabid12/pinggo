"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
;
const DoctorSchema = new mongoose_1.default.Schema({
    name: { type: String },
    specialization: { type: String },
});
const DepartmentSchema = new mongoose_1.default.Schema({
    name: { type: String },
    description: { type: String },
    doctors: { type: [DoctorSchema], default: [] },
});
const BranchSchema = new mongoose_1.default.Schema({
    name: { type: String },
    location: { type: String },
    departments: { type: [DepartmentSchema], default: [] },
});
const MedcalBusinessSchema = new mongoose_1.default.Schema({
    name: { type: String },
    // email: { type: String, unique: true },
    email: { type: String },
    vendorId: { type: String },
    userId: { type: String },
    userName: { type: String },
    businessType: { type: String, enum: ['hospital', 'diagonostic-center', 'doctor-chamber', 'dental-hospital'], required: true },
    catalogId: { type: String },
    description: { type: String },
    services: { type: [String], default: [] },
    branches: { type: [BranchSchema], default: [] },
}, { timestamps: true });
const MedcalBusiness = mongoose_1.default.model("MedcalBusiness", MedcalBusinessSchema);
exports.default = MedcalBusiness;
