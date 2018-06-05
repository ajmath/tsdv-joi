import { Reference, Schema, ValidationOptions, WhenOptions } from "joi";
export declare function Allow(...values: any[]): PropertyDecorator;
export declare function AnySchema(): PropertyDecorator;
/**
 * Returns a new type that is the result of adding the rules of one type to another.
 */
export declare function Concat(schema: Schema): PropertyDecorator;
/**
 * Sets a default value if the original value is undefined.
 */
export declare function Default(value?: any, description?: string): PropertyDecorator;
/**
 * Annotates the key where:
 * @param desc - the description string.
 */
export declare function Description(desc: string): PropertyDecorator;
/**
 * Outputs the original untouched value instead of the casted value.
 */
export declare function Empty(schema: any): PropertyDecorator;
/**
 * Annotates the key where:
 * @param value - an example value.
 * If the example fails to pass validation, the function will throw.
 */
export declare function Example(value: any): PropertyDecorator;
/**
 * Marks a key as forbidden which will not allow any value except undefined. Used to explicitly forbid keys.
 */
export declare function Forbidden(): PropertyDecorator;
export declare function Invalid(...values: any[]): PropertyDecorator;
export declare const Disallow: typeof Invalid;
export declare const Not: typeof Invalid;
/**
 * Overrides the key name in error messages.
 */
export declare function Label(name: string): PropertyDecorator;
/**
 * Attaches metadata to the key where:
 * @param meta - the meta object to attach.
 */
export declare function Meta(meta: any): PropertyDecorator;
/**
 * Annotates the key where:
 * @param notes - the notes string or multiple strings.
 */
export declare function Notes(...notes: string[]): PropertyDecorator;
export declare function Optional(): PropertyDecorator;
/**
 * Overrides the global validate() options for the current key and any sub-key where:
 * @param options - an object with the same optional keys as Joi.validate(value, schema, options, callback).
 */
export declare function Options(options: ValidationOptions): PropertyDecorator;
/**
 * Outputs the original untouched value instead of the casted value.
 */
export declare function Raw(isRaw?: boolean): PropertyDecorator;
export declare function Required(): PropertyDecorator;
/**
 * Strict mode sets the options.convert options to false which prevent type casting for the current key and any child keys.
 * @param isStrict - whether strict mode is enabled or not. Defaults to true.
 */
export declare function Strict(isStrict?: boolean): PropertyDecorator;
/**
 * Marks a key to be removed from a resulting object or array after validation. Used to sanitize output.
 */
export declare function Strip(): PropertyDecorator;
/**
 * Annotates the key where:
 * @param tags - the tag string or multiple strings.
 */
export declare function Tags(...tags: string[]): PropertyDecorator;
/**
 * Annotates the key where:
 * @param name - the unit name of the value.
 */
export declare function Unit(name: string): PropertyDecorator;
export declare function Valid(...values: any[]): PropertyDecorator;
export declare const Only: typeof Valid;
export declare const Equal: typeof Valid;
/**
 * Converts the type into an alternatives type where the conditions are merged into the type definition.
 */
export declare function When<T>(ref: string | Reference, options: WhenOptions<T>): PropertyDecorator;
