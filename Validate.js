"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
const MultipleValidationError_1 = require("./MultipleValidationError");
function Validate(validator) {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            const types = Reflect.getMetadata("design:paramtypes", target, propertyKey);
            const failures = [];
            const newArgs = [];
            for (let i = 0; i < args.length; i++) {
                const arg = args[i];
                const argType = types[i];
                const workingSchema = Reflect.getMetadata(core_1.WORKING_SCHEMA_KEY, argType.prototype);
                if (workingSchema) {
                    let result = validator.validateAsClass(arg, argType);
                    if (result.error != null) {
                        failures.push(result.error);
                    }
                    newArgs.push(result.value);
                }
                else {
                    newArgs.push(arg);
                }
            }
            if (failures.length > 0) {
                throw new MultipleValidationError_1.MultipleValidationError(failures);
            }
            else {
                return original.apply(this, newArgs);
            }
        };
        return descriptor;
    };
}
exports.Validate = Validate;
