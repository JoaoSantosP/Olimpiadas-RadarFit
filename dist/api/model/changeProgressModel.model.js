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
exports.changeProgressModel = void 0;
const database_1 = require("../../database");
const changeProgressModel = (nameCompetition, changeProgress) => __awaiter(void 0, void 0, void 0, function* () {
    const changeProgressFinal = yield database_1.prismaClient.competicao.update({
        where: {
            nome_da_competicao: nameCompetition
        },
        data: {
            em_progresso: changeProgress
        }
    });
    return { em_progresso: changeProgressFinal.em_progresso };
});
exports.changeProgressModel = changeProgressModel;
//# sourceMappingURL=changeProgressModel.model.js.map