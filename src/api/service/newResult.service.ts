import { IDataRequest } from "../../interface/newRegister.interface";
import { insertNewResultModel } from "../model/newResult.model";

export const insertNewResultService = async (data: IDataRequest) => {
  const finalResult = await insertNewResultModel(data)
  return finalResult
}