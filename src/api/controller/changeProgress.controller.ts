import { RequestHandler } from "express";
import { changeProgressService } from "../service/changeProgress.service";

export const changeProgressController: RequestHandler = async (req, res, next) => {
  const { nameCompetition, changeProgress } = req.body;
  const finalResult = await changeProgressService(nameCompetition, changeProgress)
  return res.status(204).json(finalResult)
}