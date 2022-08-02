import { prismaClient } from "../../database";

export const changeProgressModel = async (nameCompetition: string, changeProgress: boolean) => {
  const findCompetition = await prismaClient.competicao.findFirst({
    where: {
      nome_da_competicao: {
        equals: nameCompetition
      }
    }
  })
  if (!findCompetition) {
    return null
  }
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