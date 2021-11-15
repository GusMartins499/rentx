import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const speficationsRouter = Router();

const specificationsRepository = new SpecificationsRepository();

speficationsRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.excute({ name, description });

  return response.status(201).send();
});

export { speficationsRouter };
