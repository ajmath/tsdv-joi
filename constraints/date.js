"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
function DateSchema() {
    return core_1.typeConstraintDecorator([Date, String], (Joi) => {
        return Joi.date();
    });
}
exports.DateSchema = DateSchema;
function Iso() {
    return core_1.constraintDecorator([Date, String], (schema) => {
        return schema.iso();
    });
}
exports.Iso = Iso;
function Max(limit) {
    return core_1.constraintDecorator([Date, String], (schema) => {
        return schema.max(limit);
    });
}
exports.Max = Max;
function Min(limit) {
    return core_1.constraintDecorator([Date, String], (schema) => {
        return schema.min(limit);
    });
}
exports.Min = Min;
function Timestamp(type) {
    return core_1.constraintDecorator([Date, String], (schema) => {
        return schema.timestamp(type);
    });
}
exports.Timestamp = Timestamp;
