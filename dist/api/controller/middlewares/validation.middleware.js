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
exports.validationNameCompetition = exports.validationCompetition = void 0;
const getRanking_service_1 = require("../../service/getRanking.service");
const validationCompetition = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { nameCompetition } = req.body;
    const progress = yield (0, getRanking_service_1.inProgressService)(nameCompetition);
    if (progress == false) {
        return res.status(404).json({ message: "Competição encerrada" });
    }
    return next();
});
exports.validationCompetition = validationCompetition;
const validationNameCompetition = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { nameCompetition } = req.body;
    const progress = yield (0, getRanking_service_1.getRankingService)(nameCompetition);
    if (progress == null) {
        return res.status(404).json({ message: "Competição não existente" });
    }
    return next();
});
exports.validationNameCompetition = validationNameCompetition;
//# sourceMappingURL=validation.middleware.js.map