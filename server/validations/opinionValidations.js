import Joi from 'joi';

export const opinionSchema = Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    description: Joi.string().min(3).max(1500).required(),
    userId: Joi.required(),
    productionDate: Joi.date().iso()
});