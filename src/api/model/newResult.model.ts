import { prismaClient } from "../../database";
import { IDataRequest } from "../../interface/newRegister.interface";

export const insertNewResultModel = async (dataR: IDataRequest) => {
  const resultFinal = await prismaClient.campeonato.create({
    data: {
      ...dataR
    }
  })
  return resultFinal
}