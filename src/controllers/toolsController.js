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
    await toolsService.postTool(req.body);

    res.sendStatus(201);
  } catch (error) {
    if (error instanceof ValidationError)
      return res.status(400).send(error.message);
    if (error.code === "23505")
      return res.status(409).send("The Tool already exists");
    next(error);
  }
}

async function deleteTool(req, res, next){
  try {
    const {id} = req.params;

    await toolsService.deleteTool(id)

    res.sendStatus(200)
  } catch (error) {
    next(error);
  }
}

export { getAllTools, postTool, deleteTool };
