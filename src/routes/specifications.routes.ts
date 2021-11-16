import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const speficationsRouter = Router();

speficationsRouter.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { speficationsRouter };
