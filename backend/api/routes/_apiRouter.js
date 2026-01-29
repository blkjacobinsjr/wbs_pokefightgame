import { Router } from "express";
import pokemonRouter from "./_pokemonRouter.js";
import fightsRouter from "./_fightsRouter.js";
import typesRouter from "./_typesRoute.js";
import initialLoad from "./_initialLoad.js";
const apiRouter = Router();

// ROUTE pokemon
apiRouter.use("/pokemon", pokemonRouter);

// ROUTE fights
apiRouter.use("/fights", fightsRouter);

// ROUTE types
apiRouter.use("/types", typesRouter);

// ROUTE initial_load (hit once to seed DB, then can be removed)
apiRouter.use("/initial_load", initialLoad);

export default apiRouter;
