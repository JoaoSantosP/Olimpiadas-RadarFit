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
exports.insertNewResultService = void 0;
const newResult_model_1 = require("../model/newResult.model");
const insertNewResultService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const finalResult = yield (0, newResult_model_1.insertNewResultModel)(data);
    return finalResult;
});
exports.insertNewResultService = insertNewResultService;
//# sourceMappingURL=newResult.service.js.map