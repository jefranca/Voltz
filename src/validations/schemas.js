import joi from "joi";

const toolsSchemma = joi.object({
  title: joi.string().required(),
  link: joi.string().required(),
  description: joi.string().required(),
  tags: joi.array().required(),
});

export { toolsSchemma };
