"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
class Validator {
    constructor(defaultOptions) {
        this.defaultOptions = defaultOptions;
    }
    validate(target, options) {
        if (target === null || target === undefined) {
            throw new Error("Can't validate null objects");
        }
        return this.validateAsClass(target, target.constructor, options);
    }
    validateAsClass(target, clz, options) {
        if (target === null || target === undefined) {
            throw new Error("Can't validate null objects");
        }
        const classSchema = core_1.getJoiSchema(clz);
        if (!options) {
            options = this.defaultOptions;
        }
        if (options !== undefined) {
            return core_1.Joi.validate(target, classSchema, options);
        }
        else {
            return core_1.Joi.validate(target, classSchema);
        }
    }
    validateArrayAsClass(target, clz, options) {
        if (target === null || target === undefined) {
            throw new Error("Can't validate null arrays");
        }
        const classSchema = core_1.getJoiSchema(clz);
        const arraySchema = core_1.Joi.array().items(classSchema);
        if (!options) {
            options = this.defaultOptions;
        }
        if (options !== undefined) {
            return core_1.Joi.validate(target, arraySchema, options);
        }
        else {
            return core_1.Joi.validate(target, arraySchema);
        }
    }
}
exports.Validator = Validator;
