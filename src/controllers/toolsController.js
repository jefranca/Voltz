import * as toolsService from "../services/toolsService.js"

async function getAllTools(req, res, next) {
  try {
    const allTools = await toolsService.getAllTools();
    res.status(200).send(allTools);
  } catch (error) {
    next(error);
  }
}

async function postTool(){
  await validations.toolsValidation(req.body);
}

export{ getAllTools, postTool };