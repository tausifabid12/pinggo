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
exports.deleteMedcalBusinessService = exports.updateMedcalBusinessService = exports.getMedcalBusinessByIdService = exports.getMedcalBusinesssService = exports.createMedcalBusinessService = void 0;
const medical_model_1 = __importDefault(require("./medical.model"));
// Create a new MedcalBusiness
const createMedcalBusinessService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(data);
        return yield medical_model_1.default.create(data);
    }
    catch (e) {
        console.log(e);
    }
});
exports.createMedcalBusinessService = createMedcalBusinessService;
// Get all MedcalBusinesss
const getMedcalBusinesssService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield medical_model_1.default.find();
});
exports.getMedcalBusinesssService = getMedcalBusinesssService;
// Get a single MedcalBusiness by ID
const getMedcalBusinessByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield medical_model_1.default.findById(id);
});
exports.getMedcalBusinessByIdService = getMedcalBusinessByIdService;
// Update a MedcalBusiness by ID
const updateMedcalBusinessService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield medical_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
exports.updateMedcalBusinessService = updateMedcalBusinessService;
// Delete a MedcalBusiness by ID
const deleteMedcalBusinessService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield medical_model_1.default.findByIdAndDelete(id);
});
exports.deleteMedcalBusinessService = deleteMedcalBusinessService;
