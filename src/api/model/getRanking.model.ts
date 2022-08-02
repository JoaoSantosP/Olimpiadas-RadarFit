import { prismaClient } from "../../database";
import { ICompeticao } from "../../interface/competicao.interface";
import { IDataRequest } from "../../interface/newRegister.interface";

export const getRankingModel = async (nameCompetition: string) => {

  if (nameCompetition == "competição dardos") {
    const allRankingSorted = await prismaClient.campeonato.findMany({
      distinct: ["atleta", "value"],
      orderBy: [{
        value: "desc"


      }, {
        unidade: "desc",
      }],
      select: {
        competicao: true,
        atleta: true,
        value: true,
        unidade: true
      },
      where: {
        competicao: "competição dardos"
      },

    })
    return allRankingSorted
  }
  else {
    const allRankingSorted = await prismaClient.campeonato.findMany({
      orderBy: [
        {
          value: "desc"
        },
        {
          unidade: "desc"
        }
      ],
      select: {
        competicao: true,
        atleta: true,
        value: true,
        unidade: true
      }, where: {
        competicao: nameCompetition
      }
    })
    return allRankingSorted
  }
}

export const inProgressModel = async (nameCompetition: string) => {
  const query: ICompeticao | null = await prismaClient.competicao.findFirst({
    where: {
      nome_da_competicao: {
        equals: nameCompetition
      }
    }
  })
  if (!query) {
    return null
  }
  return query.em_progresso
}