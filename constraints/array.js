"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
function ArraySchema() {
    return core_1.typeConstraintDecorator([Array], (Joi) => {
        return Joi.array();
    });
}
exports.ArraySchema = ArraySchema;
/**
 * List the types allowed for the array values.
 */
function Items(type, ...types) {
    types = [type].concat(types);
    return core_1.constraintDecorator([Array], (schema) => {
        return schema.items(types);
    });
}
exports.Items = Items;
function Length(limit) {
    return core_1.constraintDecorator([Array], (schema) => {
        return schema.length(limit);
    });
}
exports.Length = Length;
function Max(limit) {
    return core_1.constraintDecorator([Array], (schema) => {
        return schema.max(limit);
    });
}
exports.Max = Max;
function Min(limit) {
    return core_1.constraintDecorator([Array], (schema) => {
        return schema.min(limit);
    });
}
exports.Min = Min;
/**
 * List the types in sequence order for the array values..
 */
function Ordered(...types) {
    return core_1.constraintDecorator([Array], (schema) => {
        return schema.ordered.apply(schema, types); // hmm?
    });
}
exports.Ordered = Ordered;
/**
 * Allow single values to be checked against rules as if it were provided as an array.
 * enabled can be used with a falsy value to go back to the default behavior.
 */
function Single(enabled) {
    return core_1.constraintDecorator([Array], (schema) => {
        return schema.single(enabled);
    });
}
exports.Single = Single;
/**
 * Allow this array to be sparse. enabled can be used with a falsy value to go back to the default behavior.
 */
function Sparse(enabled) {
    return core_1.constraintDecorator([Array], (schema) => {
        return schema.sparse(enabled);
    });
}
exports.Sparse = Sparse;
/**
 * Requires the array values to be unique.
 */
function Unique() {
    return core_1.constraintDecorator([Array], (schema) => {
        return schema.unique();
    });
}
exports.Unique = Unique;
