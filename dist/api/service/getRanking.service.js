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
exports.inProgressService = exports.getRankingService = void 0;
const getRanking_model_1 = require("../model/getRanking.model");
const getRankingService = (nameCompetition) => __awaiter(void 0, void 0, void 0, function* () {
    const finalResult = yield (0, getRanking_model_1.getRankingModel)(nameCompetition);
    return finalResult;
});
exports.getRankingService = getRankingService;
const inProgressService = (nameCompetition) => __awaiter(void 0, void 0, void 0, function* () {
    const progressBoolean = yield (0, getRanking_model_1.inProgressModel)(nameCompetition);
    if (progressBoolean == null) {
        return null;
    }
    return progressBoolean;
});
exports.inProgressService = inProgressService;
//# sourceMappingURL=getRanking.service.js.map