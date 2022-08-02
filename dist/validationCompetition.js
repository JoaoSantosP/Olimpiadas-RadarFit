"use strict";
/* import { prismaClient } from "./database";

const validation = async (req, res, next) => {
  const { nameCompetition }= req.body;
  const query:any = await prismaClient.competicao.findFirst({
    where: {
      nome_da_competicao: {
        equals: nameCompetition
      }
    }
  })
  if (query.em_progresso == false) {
    return new Error("Competicao encerrada")
  }
  return next()
} */ 
//# sourceMappingURL=validationCompetition.js.map