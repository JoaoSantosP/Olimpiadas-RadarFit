"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const changeProgress_controller_1 = require("../controller/changeProgress.controller");
const getRanking_controller_1 = require("../controller/getRanking.controller");
const validation_middleware_1 = require("../controller/middlewares/validation.middleware");
const newResult_controller_1 = require("../controller/newResult.controller");
const rankingRouter = express_1.default.Router();
rankingRouter.post('/insertRanking', validation_middleware_1.validationNameCompetition, validation_middleware_1.validationCompetition, newResult_controller_1.insertNewResultController);
rankingRouter.patch('/changeStatus', validation_middleware_1.validationNameCompetition, changeProgress_controller_1.changeProgressController);
rankingRouter.get('/', validation_middleware_1.validationNameCompetition, getRanking_controller_1.getRankingController);
exports.default = rankingRouter;
//# sourceMappingURL=ranking.router.js.map