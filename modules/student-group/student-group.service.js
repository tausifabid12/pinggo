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
exports.deleteStudentGroupService = exports.updateStudentGroupService = exports.getStudentGroupByIdService = exports.getStudentGroupsService = exports.createBlukStudentGroupService = exports.createStudentGroupService = void 0;
const student_group_model_1 = __importDefault(require("./student-group.model"));
;
// Create a new StudentGroup
const createStudentGroupService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_group_model_1.default.create(data);
});
exports.createStudentGroupService = createStudentGroupService;
const createBlukStudentGroupService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(data, 'pppppppppppppppppppp');
        return yield student_group_model_1.default.insertMany(data, { ordered: false }); // Continues inserting even if one fails
    }
    catch (error) {
        console.error("Bulk insert failed:", error);
        throw error;
    }
});
exports.createBlukStudentGroupService = createBlukStudentGroupService;
// Get all StudentGroups
const getStudentGroupsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_group_model_1.default.find();
});
exports.getStudentGroupsService = getStudentGroupsService;
// Get a single StudentGroup by ID
const getStudentGroupByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_group_model_1.default.findById(id);
});
exports.getStudentGroupByIdService = getStudentGroupByIdService;
// Update a StudentGroup by ID
const updateStudentGroupService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_group_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
exports.updateStudentGroupService = updateStudentGroupService;
// Delete a StudentGroup by ID
const deleteStudentGroupService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_group_model_1.default.findByIdAndDelete(id);
});
exports.deleteStudentGroupService = deleteStudentGroupService;
