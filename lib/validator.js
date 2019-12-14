let joi = require('joi');


//To validate query in request body
exports.validateRecords = joi.object().keys({
    Date: joi.string().regex(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/),
    Order_Id: joi.string().invalid(null).required().trim(),
    Nonprofit: joi.string().invalid(null).trim(),
    Donation_Currency: joi.string().invalid(null).trim(),
    Donation_Amount: joi.string().invalid(null).trim(),
    Fee: joi.string().invalid(null).trim()

})


exports.getErrorMessage = function (err) {
    err.details[0].message = err.details[0].message.replace(/\"/g, '')
    if (err.details[0].path.length == 1)
        return err.details[0].message;
    else {
        var path = err.details[0].path.join(".");
        if (path.trim().length > 0)
            path = " at path " + path;
        return err.details[0].message + path;

    }
}