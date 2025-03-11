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
exports.getAllUsers = exports.registerUser = void 0;
const user_service_1 = require("./user.service");
const jwt_1 = require("../../utils/jwt");
const user_model_1 = __importDefault(require("./user.model"));
/**
 * Register a new user
 */
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const existingUser = yield (0, user_service_1.findUserByEmail)(email);
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        const user = yield (0, user_service_1.createUser)(name, email, password);
        const token = (0, jwt_1.generateToken)(user._id.toString());
        console.log(user, "[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[");
        res.status(201).json({ user, token });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.registerUser = registerUser;
/**
 * Get all users (Protected)
 */
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find().select("-password");
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllUsers = getAllUsers;
