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
exports.deleteLabelFromDb = exports.updateLabelInDb = exports.getLabelByIdFromDb = exports.getLabelsFromDb = exports.createLabelInDb = void 0;
const label_model_1 = __importDefault(require("./label.model"));
// Create a new Label
const createLabelInDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield label_model_1.default.create(data);
});
exports.createLabelInDb = createLabelInDb;
// Get all Labels
const getLabelsFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield label_model_1.default.find();
});
exports.getLabelsFromDb = getLabelsFromDb;
// Get a single Label by ID
const getLabelByIdFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield label_model_1.default.findById(id);
});
exports.getLabelByIdFromDb = getLabelByIdFromDb;
// Update a Label by ID
const updateLabelInDb = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield label_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
exports.updateLabelInDb = updateLabelInDb;
// Delete a Label by ID
const deleteLabelFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield label_model_1.default.findByIdAndDelete(id);
});
exports.deleteLabelFromDb = deleteLabelFromDb;
