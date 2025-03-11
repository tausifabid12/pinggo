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
exports.deleteEducationService = exports.updateEducationService = exports.getEducationByIdService = exports.getEducationsService = exports.createEducationService = void 0;
const education_model_1 = __importDefault(require("./education.model"));
// Create a new Education
const createEducationService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(data);
        return yield education_model_1.default.create(data);
    }
    catch (e) {
        console.log(e);
    }
});
exports.createEducationService = createEducationService;
// Get all Educations
const getEducationsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield education_model_1.default.find();
});
exports.getEducationsService = getEducationsService;
// Get a single Education by ID
const getEducationByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield education_model_1.default.findById(id);
});
exports.getEducationByIdService = getEducationByIdService;
// Update a Education by ID
const updateEducationService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield education_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
exports.updateEducationService = updateEducationService;
// Delete a Education by ID
const deleteEducationService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield education_model_1.default.findByIdAndDelete(id);
});
exports.deleteEducationService = deleteEducationService;
