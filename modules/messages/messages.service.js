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
exports.deleteMessageInDb = exports.updateMessageInDb = exports.getMessageByIdInDb = exports.getMessagesInDb = exports.createMessageInDb = void 0;
const messages_model_1 = __importDefault(require("./messages.model"));
// Create a new Message
const createMessageInDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    //     console.log(data)
    //     return await Message.create(data);
    // }
    // catch (e) {
    //     console.log(e)
    // }
    try {
        const existingMessage = yield messages_model_1.default.findOne({ senderNumber: data.senderNumber });
        if (existingMessage) {
            // Append new message to the existing document
            yield messages_model_1.default.updateOne({ senderNumber: data.senderNumber }, { $push: { messages: data.messages[0] } });
        }
        else {
            // Create new message document
            yield messages_model_1.default.create(data);
        }
        console.log("Message added/updated successfully.");
    }
    catch (error) {
        console.error("Error adding or updating message:", error);
    }
});
exports.createMessageInDb = createMessageInDb;
// Get all Messages
const getMessagesInDb = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield messages_model_1.default.find();
});
exports.getMessagesInDb = getMessagesInDb;
// Get a single Message by ID
const getMessageByIdInDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield messages_model_1.default.findById(id);
});
exports.getMessageByIdInDb = getMessageByIdInDb;
// Update a Message by ID
const updateMessageInDb = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield messages_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
exports.updateMessageInDb = updateMessageInDb;
// Delete a Message by ID
const deleteMessageInDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // return await Message.findByIdAndDelete(id);
    return yield messages_model_1.default.deleteMany({});
});
exports.deleteMessageInDb = deleteMessageInDb;
