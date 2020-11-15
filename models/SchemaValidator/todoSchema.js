 const Joi = require('joi');

 const TodoSchema = Joi.object().keys({
     title: Joi.string().required(),
     description: Joi.string().required(),
 });

 module.exports = TodoSchema;