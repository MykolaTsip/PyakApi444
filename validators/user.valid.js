const Joi = require('joi')

module.exports = Joi.object().keys({
    id: Joi.number(),
    lastname: Joi.string().trim().min(2).max(44).required(),
    firstname: Joi.string().trim().min(2).max(44).required(),
    password: Joi.string().trim().min(7).max(66).required(),
    email: Joi.string().trim().min(4).max(100).required(),
    photo: Joi.string().trim().max(255).optional(),
    created_at: Joi.string().optional()
})
