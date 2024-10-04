import Tutor from "../entities/tutor";
import { AppDataSource } from "../../database/data-source";
import ErrorExtention from "../utils/error";
import tutorSchemaValidation from "../utils/validation/tutor-validation";
import { ITutorInput, ITutorOutput } from "../inferfaces/tutor-interface";
import { ValidationErrorItem } from "joi";

class TutorRepository {
  private static tutorRepository = AppDataSource.getRepository(Tutor)

  static async getTutor(): Promise<ITutorOutput[]> {
    return this.tutorRepository.find()
  }

  static async getOneTutor(id: number): Promise<ITutorOutput> {
    const tutor = await this.tutorRepository.findOneBy({ id })
    if (!tutor) {
      throw new ErrorExtention(404, "Tutor(a) não encontrado")
    }

    return tutor
  }

  static async postTutor(tutor: ITutorInput): Promise<ITutorOutput> {
    const { error } = tutorSchemaValidation.validate(tutor, { abortEarly: false })
    if (error) {
      const validationError = error.details.map((detail: ValidationErrorItem) => detail.message)
      throw new ErrorExtention(400, validationError.join(','))
    }

    const newTutor = await this.tutorRepository.save(tutor)
    return newTutor
  }

  static async putTutor(id: number, tutor: ITutorInput): Promise<string> {
    const { error } = tutorSchemaValidation.validate(tutor, { abortEarly: false })
    if (error) {
      const validationError = error.details.map((detail: ValidationErrorItem) => detail.message)
      throw new ErrorExtention(400, validationError.join(','))
    }

    const tutor_existe = await this.tutorRepository.findOneBy({ id })
    if (!tutor_existe) {
      throw new ErrorExtention(404, "Tutor(a) não encontrado")
    }

    await this.tutorRepository.update(id, tutor)
    return "O(A) tutor(a) foi atualizado"
  }
}

export default TutorRepository