"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
function Nested(clz) {
    return function (target, propertyKey) {
        // allowTypes(target, propertyKey, [Object]);
        let propertyType;
        if (clz) {
            propertyType = clz;
        }
        else {
            propertyType = Reflect.getMetadata("design:type", target, propertyKey);
        }
        if (!propertyType || propertyType === Object) {
            throw new core_1.ConstraintDefinitionError(`Could not determine the type of the nested property "${propertyKey}". Please pass the class to the Nested() decorator.`);
        }
        const nestedSchema = core_1.getJoiSchema(propertyType);
        core_1.updateSchema(target, propertyKey, nestedSchema);
    };
}
exports.Nested = Nested;
function NestedArray(clz) {
    return function (target, propertyKey) {
        // allowTypes(target, propertyKey, [Object]);
        let propertyType;
        if (clz) {
            propertyType = clz;
        }
        else {
            propertyType = Reflect.getMetadata("design:type", target, propertyKey);
        }
        if (!propertyType) {
            throw new core_1.ConstraintDefinitionError(`Could not determine the type of the nested property "${propertyKey}". Please pass the class to the Nested() decorator.`);
        }
        const nestedSchema = core_1.getJoiSchema(propertyType);
        core_1.updateSchema(target, propertyKey, core_1.Joi.array().items(nestedSchema));
    };
}
exports.NestedArray = NestedArray;
