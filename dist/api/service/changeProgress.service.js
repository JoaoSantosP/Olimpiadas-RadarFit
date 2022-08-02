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
exports.changeProgressService = void 0;
const changeProgressModel_model_1 = require("../model/changeProgressModel.model");
const changeProgressService = (nameCompetition, changeProgress) => __awaiter(void 0, void 0, void 0, function* () {
    const finalResult = yield (0, changeProgressModel_model_1.changeProgressModel)(nameCompetition, changeProgress);
    return finalResult;
});
exports.changeProgressService = changeProgressService;
//# sourceMappingURL=changeProgress.service.js.map