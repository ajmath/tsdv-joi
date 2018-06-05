import { ValidationError } from "joi";
export declare class MultipleValidationError extends Error {
    private errors;
    constructor(errors: ValidationError[]);
}
