"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidationPass(validationResult) {
    return !validationResult.error;
}
exports.isValidationPass = isValidationPass;
function isValidationFail(validationResult) {
    return !!validationResult.error;
}
exports.isValidationFail = isValidationFail;
