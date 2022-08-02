import { IDataRequest } from "../../interface/newRegister.interface";
import { changeProgressModel } from "../model/changeProgressModel.model";

export const changeProgressService = async (nameCompetition: string, changeProgress: boolean) => {
  const finalResult = await changeProgressModel(nameCompetition, changeProgress)
  return finalResult
}