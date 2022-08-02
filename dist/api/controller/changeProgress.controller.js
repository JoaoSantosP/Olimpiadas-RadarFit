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
exports.changeProgressController = void 0;
const changeProgress_service_1 = require("../service/changeProgress.service");
const changeProgressController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { nameCompetition, changeProgress } = req.body;
    const finalResult = yield (0, changeProgress_service_1.changeProgressService)(nameCompetition, changeProgress);
    return res.status(204).json(finalResult);
});
exports.changeProgressController = changeProgressController;
//# sourceMappingURL=changeProgress.controller.js.map