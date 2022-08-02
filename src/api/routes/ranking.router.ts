import express from "express";
import { changeProgressController } from "../controller/changeProgress.controller";
import { getRankingController } from "../controller/getRanking.controller";
import { validationCompetition, validationNameCompetition } from "../controller/middlewares/validation.middleware";
import { insertNewResultController } from "../controller/newResult.controller";

const rankingRouter = express.Router();

rankingRouter.post('/insertRanking', validationNameCompetition, validationCompetition, insertNewResultController)
rankingRouter.patch('/changeStatus', validationNameCompetition, changeProgressController)
rankingRouter.get('/', validationNameCompetition, getRankingController)

export default rankingRouter;