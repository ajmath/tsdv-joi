import { Schema } from "joi";
export declare function ArraySchema(): PropertyDecorator;
/**
 * List the types allowed for the array values.
 */
export declare function Items(type: Schema, ...types: Schema[]): PropertyDecorator;
export declare function Length(limit: number): PropertyDecorator;
export declare function Max(limit: number): PropertyDecorator;
export declare function Min(limit: number): PropertyDecorator;
/**
 * List the types in sequence order for the array values..
 */
export declare function Ordered(...types: Schema[]): PropertyDecorator;
/**
 * Allow single values to be checked against rules as if it were provided as an array.
 * enabled can be used with a falsy value to go back to the default behavior.
 */
export declare function Single(enabled?: boolean | any): PropertyDecorator;
/**
 * Allow this array to be sparse. enabled can be used with a falsy value to go back to the default behavior.
 */
export declare function Sparse(enabled?: boolean | any): PropertyDecorator;
/**
 * Requires the array values to be unique.
 */
export declare function Unique(): PropertyDecorator;
