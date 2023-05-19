import Joi from "@hapi/joi";

const RegisterValidationMasyarakat = (data) => {
    const schema = Joi.object({
        full_name: Joi.string()
            .min(3)
            .required(),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
        password: Joi.string()
            .min(6)
            .required(),
        call_number: Joi.string()
            .min(10)
            .required(),
        blood_type: Joi.string()
            .min(1)
            .required(),
        location: Joi.string()
            .min(4)
            .required(),
    })

    return schema.validate(data)
}
export default RegisterValidationMasyarakat;