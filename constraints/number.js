"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
function Greater(limit) {
    return core_1.constraintDecorator([Number], (schema) => {
        return schema.greater(limit);
    });
}
exports.Greater = Greater;
function Integer() {
    return core_1.constraintDecorator([Number], (schema) => {
        return schema.integer();
    });
}
exports.Integer = Integer;
function Less(limit) {
    return core_1.constraintDecorator([Number], (schema) => {
        return schema.less(limit);
    });
}
exports.Less = Less;
function Max(limit) {
    return core_1.constraintDecorator([Number], (schema) => {
        return schema.max(limit);
    });
}
exports.Max = Max;
function Min(limit) {
    return core_1.constraintDecorator([Number], (schema) => {
        return schema.min(limit);
    });
}
exports.Min = Min;
function Multiple(base) {
    return core_1.constraintDecorator([Number], (schema) => {
        return schema.multiple(base);
    });
}
exports.Multiple = Multiple;
function Negative() {
    return core_1.constraintDecorator([Number], (schema) => {
        return schema.negative();
    });
}
exports.Negative = Negative;
function NumberSchema() {
    return core_1.typeConstraintDecorator([Number], (Joi) => {
        return Joi.number();
    });
}
exports.NumberSchema = NumberSchema;
function Positive() {
    return core_1.constraintDecorator([Number], (schema) => {
        return schema.positive();
    });
}
exports.Positive = Positive;
function Precision(limit) {
    return core_1.constraintDecorator([Number], (schema) => {
        return schema.precision(limit);
    });
}
exports.Precision = Precision;
