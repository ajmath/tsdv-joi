"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MultipleValidationError extends Error {
    constructor(errors) {
        super();
        this.errors = errors;
        Object.setPrototypeOf(this, MultipleValidationError.prototype);
    }
}
exports.MultipleValidationError = MultipleValidationError;
