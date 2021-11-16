import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { speficationsRouter } from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", speficationsRouter);

export { router };
