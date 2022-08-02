import { getRankingModel, inProgressModel } from "../model/getRanking.model"

export const getRankingService = async (nameCompetition: string) => {
  const finalResult = await getRankingModel(nameCompetition)
  return finalResult
}

export const inProgressService = async (nameCompetition: string) => {
  const progressBoolean = await inProgressModel(nameCompetition)
  if (progressBoolean == null) {
    return null
  }
  return progressBoolean
}