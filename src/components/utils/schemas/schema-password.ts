import Joi from 'joi'

export const schemaPassword = Joi.string()
  .min(8)
  .max(64)
  .regex(/^\S*$/, 'noSpaces')
  .regex(/[A-Z]/, 'missingUpperCase')
  .regex(/[a-z]/, 'missingLowerCase')
  .regex(/\d/, 'missingNumber')
  .required()
