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
exports.insertNewResultController = void 0;
const newResult_service_1 = require("../service/newResult.service");
const insertNewResultController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { competicao, atleta, value, unidade } = req.body;
    /* if(competicao == "competição dardos") {
      const greaterResult = result.sort((a, b) => {return b.value > a.value })[0]
          
    } */
    const finalResult = yield (0, newResult_service_1.insertNewResultService)({ competicao, atleta, value, unidade });
    return res.status(201).json(finalResult);
});
exports.insertNewResultController = insertNewResultController;
//# sourceMappingURL=newResult.controller.js.map