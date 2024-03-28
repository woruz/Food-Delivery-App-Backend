const Joi = require('joi')

let validate = (params, schema) => {
    return schema.validate(params)
}

let validate_price_calculation = (params) => {
    const schema = Joi.object({
        organizationId: Joi.string().required(),
        zone: Joi.string().required(),
        totalDistance: Joi.string().required(),
        itemType: Joi.string().required(),
    })

    return validate(params,schema)
}

module.exports = { validate_price_calculation }