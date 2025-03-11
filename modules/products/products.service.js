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
exports.deleteProductinDB = exports.updateProductinDB = exports.getProductsById = exports.getProductsinDB = exports.createProductinDB = void 0;
const products_model_1 = __importDefault(require("./products.model"));
// Create a new Products
const createProductinDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield products_model_1.default.create(data);
});
exports.createProductinDB = createProductinDB;
// Get all Productss
const getProductsinDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield products_model_1.default.find();
});
exports.getProductsinDB = getProductsinDB;
// Get a single Products by ID
const getProductsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield products_model_1.default.findById(id);
});
exports.getProductsById = getProductsById;
// Update a Products by ID
const updateProductinDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield products_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
exports.updateProductinDB = updateProductinDB;
// Delete a Products by ID
const deleteProductinDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield products_model_1.default.findByIdAndDelete(id);
});
exports.deleteProductinDB = deleteProductinDB;
