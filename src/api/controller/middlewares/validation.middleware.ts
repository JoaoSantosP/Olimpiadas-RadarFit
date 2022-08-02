
import { getRankingService, inProgressService } from "../../service/getRanking.service";
import { RequestHandler } from "express";
import { changeProgressService } from "../../service/changeProgress.service";

export const validationCompetition: RequestHandler = async (req, res, next) => {
  const { nameCompetition } = req.body;
  const progress = await inProgressService(nameCompetition)
  if (progress == false) {
    return res.status(404).json({ message: "Competição encerrada" })
  }
  return next()
}

export const validationNameCompetition: RequestHandler = async (req, res, next) => {
  const { nameCompetition, changeProgress } = req.body;
  const progress = await changeProgressService(nameCompetition, changeProgress)
  if (!progress) {
    return res.status(404).json({ message: "Competição não existente" })
  }
  return next()
}