import { prismaClient } from "../../database";

export const changeProgressModel = async (nameCompetition: string, changeProgress: boolean) => {
  const changeProgressFinal = await prismaClient.competicao.update({
    where: {
      nome_da_competicao: nameCompetition
    },
    data: {
      em_progresso: changeProgress
    }
  })
  return { em_progresso: changeProgressFinal.em_progresso }
}