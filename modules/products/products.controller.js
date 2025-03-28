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
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getProducts = exports.createProduct = void 0;
const products_service_1 = require("./products.service");
// Create a new Product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Product = yield (0, products_service_1.createProductinDB)(req.body);
        res.status(201).json(Product);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating user flow", error });
    }
});
exports.createProduct = createProduct;
// Get all Products
const getProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Products = yield (0, products_service_1.getProductsinDB)();
        res.json(Products);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flows", error });
    }
});
exports.getProducts = getProducts;
// Get a single Product by ID
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Product = yield (0, products_service_1.getProductsById)(req.params.id);
        if (!Product) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(Product);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user flow", error });
    }
});
exports.getProductById = getProductById;
// Update a Product by ID
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Product = yield (0, products_service_1.updateProductinDB)(req.params.id, req.body);
        if (!Product) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json(Product);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating user flow", error });
    }
});
exports.updateProduct = updateProduct;
// Delete a Product by ID
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Product = yield (0, products_service_1.deleteProductinDB)(req.params.id);
        if (!Product) {
            res.status(404).json({ message: "User flow not found" });
            return;
        }
        res.json({ message: "User flow deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting user flow", error });
    }
});
exports.deleteProduct = deleteProduct;
