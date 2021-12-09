import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const speficationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();

speficationsRouter.use(ensureAuthenticated);
speficationsRouter.post("/", createSpecificationController.handle);

export { speficationsRouter };
