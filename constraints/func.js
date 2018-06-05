"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
function Arity(n) {
    return core_1.constraintDecorator([Function], (schema) => {
        return schema.arity(n);
    });
}
exports.Arity = Arity;
function FuncSchema() {
    return core_1.typeConstraintDecorator([Function], (Joi) => {
        return Joi.func();
    });
}
exports.FuncSchema = FuncSchema;
function MaxArity(n) {
    return core_1.constraintDecorator([Function], (schema) => {
        return schema.maxArity(n);
    });
}
exports.MaxArity = MaxArity;
function MinArity(n) {
    return core_1.constraintDecorator([Function], (schema) => {
        return schema.minArity(n);
    });
}
exports.MinArity = MinArity;
