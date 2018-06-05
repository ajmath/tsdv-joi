import { ValidationOptions } from "joi";
import { ValidationResult } from "./ValidationResult";
export declare class Validator {
    private defaultOptions;
    constructor(defaultOptions?: ValidationOptions | undefined);
    validate<T>(target: T, options?: ValidationOptions): ValidationResult<T>;
    validateAsClass<T>(target: T, clz: Function, options?: ValidationOptions): ValidationResult<T>;
    validateArrayAsClass<T>(target: T[], clz: Function, options?: ValidationOptions): ValidationResult<T[]>;
}
