"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
router.post("/create", products_controller_1.createProduct);
router.get("/", products_controller_1.getProducts);
router.get("/:id", products_controller_1.getProductById);
router.put("/:id", products_controller_1.updateProduct);
router.delete("/:id", products_controller_1.deleteProduct);
exports.default = router;
