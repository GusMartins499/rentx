import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { speficationsRouter } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", speficationsRouter);
router.use("/users", usersRoutes);

export { router };
