"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const routes_1 = __importDefault(require("./routes"));
const error_middleware_1 = require("./middlewares/error.middleware");
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1", routes_1.default);
app.use(error_middleware_1.errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// import express from "express";
// import https from "https";
// import fs from "fs";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db";
// import routes from "./routes";
// import { errorHandler } from "./middlewares/error.middleware";
// dotenv.config();
// connectDB();
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/api/v1", routes);
// app.use(errorHandler);
// const PORT = process.env.PORT || 5000;
// // Load SSL Certificates
// // const options = {
// //     key: fs.readFileSync("../ssl/key.pem"),
// //     cert: fs.readFileSync("../ssl/cert.pem"),
// // };
// // Start HTTPS Server
// // const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
