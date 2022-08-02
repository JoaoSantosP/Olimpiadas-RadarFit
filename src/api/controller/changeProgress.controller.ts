import { RequestHandler } from "express";
import { changeProgressService } from "../service/changeProgress.service";

export const changeProgressController: RequestHandler = async (req, res, next) => {
  const { nameCompetition, changeProgress } = req.body;
  const finalResult = await changeProgressService(nameCompetition, changeProgress)
  console.log(finalResult)
  return res.status(200).json(finalResult)
}