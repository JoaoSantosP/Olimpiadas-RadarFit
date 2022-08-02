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
exports.inProgressModel = exports.getRankingModel = void 0;
const database_1 = require("../../database");
const getRankingModel = (nameCompetition) => __awaiter(void 0, void 0, void 0, function* () {
    if (nameCompetition == "competição dardos") {
        const allRankingSorted = yield database_1.prismaClient.campeonato.findMany({
            distinct: ["atleta", "value"],
            orderBy: [{
                    value: "desc"
                }, {
                    unidade: "desc",
                }],
            select: {
                competicao: true,
                atleta: true,
                value: true,
                unidade: true
            },
            where: {
                competicao: "competição dardos"
            },
        });
        return allRankingSorted;
    }
    else {
        const allRankingSorted = yield database_1.prismaClient.campeonato.findMany({
            orderBy: [
                {
                    value: "desc"
                },
                {
                    unidade: "desc"
                }
            ],
            select: {
                competicao: true,
                atleta: true,
                value: true,
                unidade: true
            }, where: {
                competicao: nameCompetition
            }
        });
        return allRankingSorted;
    }
});
exports.getRankingModel = getRankingModel;
const inProgressModel = (nameCompetition) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield database_1.prismaClient.competicao.findFirst({
        where: {
            nome_da_competicao: {
                equals: nameCompetition
            }
        }
    });
    if (!query) {
        return null;
    }
    return query.em_progresso;
});
exports.inProgressModel = inProgressModel;
//# sourceMappingURL=getRanking.model.js.map