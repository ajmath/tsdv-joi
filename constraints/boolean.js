"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
function BooleanSchema() {
    return core_1.typeConstraintDecorator([Boolean], (Joi) => {
        return Joi.boolean();
    });
}
exports.BooleanSchema = BooleanSchema;
function Truthy(value, ...values) {
    values = [value].concat(values);
    return core_1.constraintDecorator([Boolean], (schema) => {
        return schema.truthy(...values);
    });
}
exports.Truthy = Truthy;
function Falsy(value, ...values) {
    values = [value].concat(values);
    return core_1.constraintDecorator([Boolean], (schema) => {
        return schema.falsy(...values);
    });
}
exports.Falsy = Falsy;
function Insensitive(enabled = true) {
    return core_1.constraintDecorator([Boolean], (schema) => {
        return schema.insensitive(enabled);
    });
}
exports.Insensitive = Insensitive;
