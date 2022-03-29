import cors from "cors";
import express from "express";

import errorHandler from "./middlewares/errorHandler.js";
import * as toolsController from "./controllers/toolsController.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req, res) => res.sendStatus(200));
app.get("/tools", toolsController.getAllTools);
app.post("/tools", toolsController.postTool);
app.delete("/tools/:id", toolsController.deleteTool)

app.use(errorHandler);

export default app;
