"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const OrderSchema = new mongoose_1.default.Schema({
    userId: { type: String },
    businessName: { type: String },
    vendorId: { type: String },
    status: { type: String, enum: ['preparing', 'shippied', 'delivered'] },
    delivaryTrackingLink: { type: String, required: false },
    buyerDetails: {
        name: { type: String },
        email: { type: String },
        phone: { type: String },
        state: { type: String },
        city: { type: String },
        address: { type: String },
    },
    products: [
        {
            userId: { type: String },
            productName: { type: String },
            imageUrl: { type: [String] },
            price: { type: String },
            offerPrice: { type: String },
            categoryId: { type: String },
            categoryName: { type: String },
            description: { type: String },
        }
    ],
}, { timestamps: true });
const Order = mongoose_1.default.model("Order", OrderSchema);
exports.default = Order;
