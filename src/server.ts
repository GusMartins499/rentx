import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { speficationsRouter } from "./routes/specificationsRouter";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", speficationsRouter);

app.listen(3333, () => console.log("Server is running"));
