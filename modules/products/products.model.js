"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductsSchema = new mongoose_1.default.Schema({
    userId: { type: String },
    userName: { type: String },
    vendorId: { type: String },
    productName: { type: String },
    imageUrls: { type: [String] },
    description: { type: String },
    categoryName: { type: String },
    price: { type: Number }
}, { timestamps: true });
const Products = mongoose_1.default.model("Products", ProductsSchema);
exports.default = Products;
