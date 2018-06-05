"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
function Allow(...values) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.allow(values);
    });
}
exports.Allow = Allow;
function AnySchema() {
    return core_1.typeConstraintDecorator([Number], (Joi) => {
        return Joi.any();
    });
}
exports.AnySchema = AnySchema;
/**
 * Returns a new type that is the result of adding the rules of one type to another.
 */
function Concat(schema) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.concat(schema);
    });
}
exports.Concat = Concat;
/**
 * Sets a default value if the original value is undefined.
 */
function Default(value, description) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.default(value, description);
    });
}
exports.Default = Default;
/**
 * Annotates the key where:
 * @param desc - the description string.
 */
function Description(desc) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.description(desc);
    });
}
exports.Description = Description;
/**
 * Outputs the original untouched value instead of the casted value.
 */
function Empty(schema) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.empty(schema);
    });
}
exports.Empty = Empty;
/**
 * Annotates the key where:
 * @param value - an example value.
 * If the example fails to pass validation, the function will throw.
 */
function Example(value) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.example(value);
    });
}
exports.Example = Example;
/**
 * Marks a key as forbidden which will not allow any value except undefined. Used to explicitly forbid keys.
 */
function Forbidden() {
    return core_1.constraintDecorator([], (schema) => {
        return schema.forbidden();
    });
}
exports.Forbidden = Forbidden;
function Invalid(...values) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.invalid(values);
    });
}
exports.Invalid = Invalid;
exports.Disallow = Invalid;
exports.Not = Invalid;
/**
 * Overrides the key name in error messages.
 */
function Label(name) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.label(name);
    });
}
exports.Label = Label;
/**
 * Attaches metadata to the key where:
 * @param meta - the meta object to attach.
 */
function Meta(meta) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.meta(meta);
    });
}
exports.Meta = Meta;
/**
 * Annotates the key where:
 * @param notes - the notes string or multiple strings.
 */
function Notes(...notes) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.notes(notes);
    });
}
exports.Notes = Notes;
function Optional() {
    return core_1.constraintDecorator([], (schema) => {
        return schema.optional();
    });
}
exports.Optional = Optional;
/**
 * Overrides the global validate() options for the current key and any sub-key where:
 * @param options - an object with the same optional keys as Joi.validate(value, schema, options, callback).
 */
function Options(options) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.options(options);
    });
}
exports.Options = Options;
/**
 * Outputs the original untouched value instead of the casted value.
 */
function Raw(isRaw) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.raw(isRaw);
    });
}
exports.Raw = Raw;
function Required() {
    return core_1.constraintDecorator([], (schema) => {
        return schema.required();
    });
}
exports.Required = Required;
/**
 * Strict mode sets the options.convert options to false which prevent type casting for the current key and any child keys.
 * @param isStrict - whether strict mode is enabled or not. Defaults to true.
 */
function Strict(isStrict) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.strict(isStrict);
    });
}
exports.Strict = Strict;
/**
 * Marks a key to be removed from a resulting object or array after validation. Used to sanitize output.
 */
function Strip() {
    return core_1.constraintDecorator([], (schema) => {
        return schema.strip();
    });
}
exports.Strip = Strip;
/**
 * Annotates the key where:
 * @param tags - the tag string or multiple strings.
 */
function Tags(...tags) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.tags(tags);
    });
}
exports.Tags = Tags;
/**
 * Annotates the key where:
 * @param name - the unit name of the value.
 */
function Unit(name) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.unit(name);
    });
}
exports.Unit = Unit;
function Valid(...values) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.valid(values);
    });
}
exports.Valid = Valid;
exports.Only = Valid;
exports.Equal = Valid;
/**
 * Converts the type into an alternatives type where the conditions are merged into the type definition.
 */
function When(ref, options) {
    return core_1.constraintDecorator([], (schema) => {
        return schema.when(ref, options);
    });
}
exports.When = When;
