import * as schemas from "./schemas.js";
import ValidationError from "../errors/ValidationError.js";

async function toolsValidations(tool) {
  const joiValidation = schemas.toolsSchemma.validate(tool);
  if (joiValidation.error)
    throw new ValidationError(joiValidation.error.details[0].message);
}

export { toolsValidations };
