import { Request, Response, Router } from "express";
import TutorRepository from "../repositories/tutor-repository";

class TutorController {
  public router: Router

  constructor() {
    this.router = Router()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get('/', this.getAllTutores)
    this.router.get('/:id', this. getTutor)
    this.router.post('/', this.createTutor)
    this.router.put('/:id', this.updateTutor)
  }

  private async getAllTutores(req: Request, res: Response) {
    const tutores = await TutorRepository.getTutor()
    res.status(200).json(tutores)
  }

  private async getTutor(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const tutor = await TutorRepository.getOneTutor(id)
    res.status(200).json(tutor)
  }

  private async createTutor(req: Request, res: Response) {
    const newTutor = await TutorRepository.postTutor(req.body)
    res.status(201).json(newTutor)
  }

  private async updateTutor(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const updateTutor = await TutorRepository.putTutor(id, req.body)
    res.status(200).json(updateTutor)
  }
}

const tutorController = new TutorController().router

export default tutorController