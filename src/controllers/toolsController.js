import ValidationError from "../errors/ValidationError.js";
import * as toolsService from "../services/toolsService.js";
import * as validations from "../validations/validations.js";

async function getAllTools(req, res, next) {
  try {
    const allTools = await toolsService.getAllTools();
    res.status(200).send(allTools);
  } catch (error) {
    next(error);
  }
}

async function postTool(req, res, next) {
  try {
    await validations.toolsValidations(req.body);
    res.sendStatus(201);
  } catch (error) {
    if (error instanceof ValidationError)
      return res.status(400).send(error.message);
    next(error);
  }
}

export { getAllTools, postTool };
