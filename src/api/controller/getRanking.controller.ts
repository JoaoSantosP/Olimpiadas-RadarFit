import { RequestHandler } from "express";
import { getRankingService } from "../service/getRanking.service";

export const getRankingController: RequestHandler = async (req, res, next) => {
  const { nameCompetition } = req.body;
  const finalResult = await getRankingService(nameCompetition)
  return res.status(200).json(finalResult)
}