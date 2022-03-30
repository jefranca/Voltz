import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express"

import errorHandler from "./middlewares/errorHandler.js";
import * as toolsController from "./controllers/toolsController.js";

import swaggerDocs from "../openApi.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.get("/health", async (req, res) => res.sendStatus(200));
app.get("/tools", toolsController.getAllTools);
app.post("/tools", toolsController.postTool);
app.delete("/tools/:id", toolsController.deleteTool)

app.use(errorHandler);

export default app;