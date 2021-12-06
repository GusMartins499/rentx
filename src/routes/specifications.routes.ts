import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const speficationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();

speficationsRouter.post("/", createSpecificationController.handle);

export { speficationsRouter };
