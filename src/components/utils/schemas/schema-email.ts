import Joi from 'joi'

export const schemaEmail = Joi.string()
  .email({ tlds: false })
  .required()
