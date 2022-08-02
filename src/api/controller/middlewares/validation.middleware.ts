
import { getRankingService, inProgressService } from "../../service/getRanking.service";
import { RequestHandler } from "express";

export const validationCompetition: RequestHandler = async (req, res, next) => {
  const { nameCompetition } = req.body;
  const progress = await inProgressService(nameCompetition)
  if (progress == false) {
    return res.status(404).json({ message: "Competição encerrada" })
  }
  return next()
}

export const validationNameCompetition: RequestHandler = async (req, res, next) => {
  const { nameCompetition } = req.body;
  const progress = await getRankingService(nameCompetition)
  if (progress == null) {
    return res.status(404).json({ message: "Competição não existente" })
  }
  return next()
}