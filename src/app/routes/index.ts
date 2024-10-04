import { Router } from "express";
import tutorController from "../controllers/tutor-controller";

const routers = Router()

routers.use("/tutores", tutorController)

export default routers