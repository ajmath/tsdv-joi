"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
function And(peer, ...peers) {
    peers = [peer].concat(peers);
    return core_1.constraintDecoratorWithPeers([Object], peers, (schema) => {
        return schema.and(peers);
    });
}
exports.And = And;
function Assert(ref, schema, message) {
    return core_1.constraintDecorator([Object], (schemaToUpdate) => {
        return schemaToUpdate.assert(ref, schema, message);
    });
}
exports.Assert = Assert;
function Keys(schema) {
    return core_1.constraintDecorator([Object], (schemaToUpdate) => {
        return schemaToUpdate.keys(schema);
    });
}
exports.Keys = Keys;
function Length(limit) {
    return core_1.constraintDecorator([Object], (schema) => {
        return schema.length(limit);
    });
}
exports.Length = Length;
function Max(limit) {
    return core_1.constraintDecorator([Object], (schema) => {
        return schema.max(limit);
    });
}
exports.Max = Max;
function Min(limit) {
    return core_1.constraintDecorator([Object], (schema) => {
        return schema.min(limit);
    });
}
exports.Min = Min;
function Nand(peer, ...peers) {
    peers = [peer].concat(peers);
    return core_1.constraintDecoratorWithPeers([Object], peers, (schema) => {
        return schema.nand(peers);
    });
}
exports.Nand = Nand;
function ObjectSchema(schema) {
    return core_1.typeConstraintDecorator([Object], (Joi) => {
        return Joi.object(schema);
    });
}
exports.ObjectSchema = ObjectSchema;
function OptionalKeys(...children) {
    return core_1.constraintDecorator([Object], (schema) => {
        return schema.optionalKeys(children);
    });
}
exports.OptionalKeys = OptionalKeys;
function Or(peer, ...peers) {
    peers = [peer].concat(peers);
    return core_1.constraintDecoratorWithPeers([Object], peers, (schema) => {
        return schema.or(peers);
    });
}
exports.Or = Or;
function Pattern(regex, schema) {
    return core_1.constraintDecorator([Object], (objSchema) => {
        return objSchema.pattern(regex, schema);
    });
}
exports.Pattern = Pattern;
function Rename(from, to, options) {
    return core_1.constraintDecorator([Object], (schema) => {
        return schema.rename(from, to, options);
    });
}
exports.Rename = Rename;
function RequiredKeys(...children) {
    return core_1.constraintDecorator([Object], (schema) => {
        return schema.requiredKeys(children);
    });
}
exports.RequiredKeys = RequiredKeys;
function Type(constructor, name) {
    return core_1.constraintDecorator([Object], (schema) => {
        return schema.type(constructor, name);
    });
}
exports.Type = Type;
function Unknown(allow) {
    return core_1.constraintDecorator([Object], (schema) => {
        return schema.unknown(allow);
    });
}
exports.Unknown = Unknown;
function With(key, peers) {
    return core_1.constraintDecoratorWithPeers([Object], peers, (schema) => {
        return schema.with(key, peers);
    });
}
exports.With = With;
function Without(key, peers) {
    return core_1.constraintDecoratorWithPeers([Object], peers, (schema) => {
        return schema.without(key, peers);
    });
}
exports.Without = Without;
function Xor(peer, ...peers) {
    peers = [peer].concat(peers);
    return core_1.constraintDecoratorWithPeers([Object], peers, (schema) => {
        return schema.xor(peers);
    });
}
exports.Xor = Xor;
