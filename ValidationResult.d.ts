import { ValidationError } from "joi";
export interface ValidationResultPass<T> {
    error: null;
    value: T;
}
export interface ValidationResultFail<T> {
    error: ValidationError;
    value: T;
}
export declare type ValidationResult<T> = ValidationResultPass<T> | ValidationResultFail<T>;
export declare function isValidationPass<T>(validationResult: ValidationResult<T>): validationResult is ValidationResultPass<T>;
export declare function isValidationFail<T>(validationResult: ValidationResult<T>): validationResult is ValidationResultFail<T>;
