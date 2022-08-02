import { RequestHandler } from "express";
import { insertNewResultService } from "../service/newResult.service";

export const insertNewResultController: RequestHandler = async (req, res, next) => {
  const { competicao, atleta, value, unidade } = req.body;
  /* if(competicao == "competição dardos") {
    const greaterResult = result.sort((a, b) => {return b.value > a.value })[0]
        
  } */
  const finalResult = await insertNewResultService({ competicao, atleta, value, unidade })
  return res.status(201).json(finalResult)
}