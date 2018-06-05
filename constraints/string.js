"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
function Alphanum() {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.alphanum();
    });
}
exports.Alphanum = Alphanum;
function CreditCard() {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.creditCard();
    });
}
exports.CreditCard = CreditCard;
function Email(options) {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.email(options);
    });
}
exports.Email = Email;
function Guid() {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.guid();
    });
}
exports.Guid = Guid;
function Hex() {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.hex();
    });
}
exports.Hex = Hex;
function Hostname() {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.hostname();
    });
}
exports.Hostname = Hostname;
function Ip(options) {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.ip(options);
    });
}
exports.Ip = Ip;
function IsoDate() {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.isoDate();
    });
}
exports.IsoDate = IsoDate;
function Length(limit, encoding) {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.length(limit, encoding);
    });
}
exports.Length = Length;
function Lowercase() {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.lowercase();
    });
}
exports.Lowercase = Lowercase;
function Max(limit, encoding) {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.max(limit, encoding);
    });
}
exports.Max = Max;
function Min(limit, encoding) {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.min(limit, encoding);
    });
}
exports.Min = Min;
function Regex(pattern, name) {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.regex(pattern, name);
    });
}
exports.Regex = Regex;
exports.Pattern = Regex;
function Replace(pattern, replacement) {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.replace(pattern, replacement);
    });
}
exports.Replace = Replace;
function StringSchema() {
    return core_1.typeConstraintDecorator([String], (Joi) => {
        return Joi.string();
    });
}
exports.StringSchema = StringSchema;
function Token() {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.token();
    });
}
exports.Token = Token;
function Trim() {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.trim();
    });
}
exports.Trim = Trim;
function Uppercase() {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.uppercase();
    });
}
exports.Uppercase = Uppercase;
// TODO: update Joi UriOptions to support "allowRelative" option.
function Uri(options) {
    return core_1.constraintDecorator([String], (schema) => {
        return schema.uri(options);
    });
}
exports.Uri = Uri;
