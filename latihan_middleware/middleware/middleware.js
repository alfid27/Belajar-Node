const joi = require ('joi');

exports.validate_user = (req,res,next) => {
    let schema = joi.object().keys({
        username : joi.string().required().max(5);
        username : joi.string().required().max(8);
    });
}