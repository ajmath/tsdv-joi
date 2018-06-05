"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
exports.WORKING_SCHEMA_KEY = "tsdv:working-schema";
exports.SCHEMA_KEY = "tsdv:schema";
exports.Joi = joi;
function registerJoi(customJoi) {
    exports.Joi = customJoi;
}
exports.registerJoi = registerJoi;
class ConstraintDefinitionError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = "ConstraintDefinitionError";
        Object.setPrototypeOf(this, ConstraintDefinitionError.prototype);
    }
}
exports.ConstraintDefinitionError = ConstraintDefinitionError;
function getDesignType(target, targetKey) {
    return Reflect.getMetadata("design:type", target, targetKey);
}
function getWorkingSchema(target) {
    let workingSchema = Reflect.getOwnMetadata(exports.WORKING_SCHEMA_KEY, target);
    if (!workingSchema) {
        workingSchema = {};
        Reflect.defineMetadata(exports.WORKING_SCHEMA_KEY, workingSchema, target);
    }
    return workingSchema;
}
exports.getWorkingSchema = getWorkingSchema;
function getMergedWorkingSchemas(target) {
    const workingSchema = {};
    const parentPrototype = Object.getPrototypeOf(target);
    if (!!(parentPrototype && parentPrototype.constructor !== Object)) {
        Object.assign(workingSchema, getMergedWorkingSchemas(parentPrototype));
    }
    Object.assign(workingSchema, getWorkingSchema(target));
    return workingSchema;
}
exports.getMergedWorkingSchemas = getMergedWorkingSchemas;
function getJoiSchema(clz) {
    let joiSchema = Reflect.getOwnMetadata(exports.SCHEMA_KEY, clz.prototype);
    if (joiSchema) {
        return joiSchema;
    }
    else {
        let workingSchema = getMergedWorkingSchemas(clz.prototype);
        if (!workingSchema) {
            throw new ConstraintDefinitionError(`Class "${(clz && clz.name) ? clz.name : clz}" doesn't have a schema. You may need to manually specify the base type schema, set the property type to a class, or use "Any()".`);
        }
        joiSchema = exports.Joi.object().keys(workingSchema);
        Reflect.defineMetadata(exports.SCHEMA_KEY, joiSchema, clz.prototype);
        return joiSchema;
    }
}
exports.getJoiSchema = getJoiSchema;
function getPropertySchema(target, propertyKey) {
    const classSchema = getWorkingSchema(target);
    return classSchema[propertyKey];
}
exports.getPropertySchema = getPropertySchema;
function updateSchema(target, propertyKey, schema) {
    const classSchema = getWorkingSchema(target);
    classSchema[propertyKey] = schema;
}
exports.updateSchema = updateSchema;
function getAndUpdateSchema(target, propertyKey, updateFunction) {
    let schema = getPropertySchema(target, propertyKey);
    if (!schema) {
        schema = guessTypeSchema(target, propertyKey);
    }
    schema = updateFunction(schema);
    updateSchema(target, propertyKey, schema);
}
exports.getAndUpdateSchema = getAndUpdateSchema;
function constraintDecorator(allowedTypes, updateFunction) {
    return function (target, propertyKey) {
        allowTypes(target, propertyKey, allowedTypes);
        getAndUpdateSchema(target, propertyKey, updateFunction);
    };
}
exports.constraintDecorator = constraintDecorator;
function constraintDecoratorWithPeers(allowedTypes, peers, updateFunction) {
    return function (target, propertyKey) {
        allowTypes(target, propertyKey, allowedTypes);
        verifyPeers(target, peers);
        getAndUpdateSchema(target, propertyKey, updateFunction);
    };
}
exports.constraintDecoratorWithPeers = constraintDecoratorWithPeers;
function typeConstraintDecorator(allowedTypes, typeSchema) {
    return function (target, propertyKey) {
        allowTypes(target, propertyKey, allowedTypes);
        let schema = getPropertySchema(target, propertyKey);
        if (schema) {
            throw new ConstraintDefinitionError(`A validation schema already exists for property: ${propertyKey}`);
        }
        else {
            schema = typeSchema(exports.Joi);
            updateSchema(target, propertyKey, schema);
        }
    };
}
exports.typeConstraintDecorator = typeConstraintDecorator;
function guessTypeSchema(target, propertyKey) {
    let propertyType = getDesignType(target, propertyKey);
    let schema = undefined;
    switch (propertyType) {
        case Array:
            schema = exports.Joi.array();
            break;
        case Boolean:
            schema = exports.Joi.boolean();
            break;
        case Date:
            schema = exports.Joi.date();
            break;
        case Function:
            schema = exports.Joi.func();
            break;
        case Number:
            schema = exports.Joi.number();
            break;
        case Object:
            // We don't guess the type for "Object" types, because these can represent unions like "number | null".
            // To use an object schema, you must explicitly decorate the property with ObjectSchema().
            // schema = Joi.object();
            break;
        case String:
            schema = exports.Joi.string();
            break;
        default:
            break;
    }
    if (schema === undefined) {
        throw new ConstraintDefinitionError(`No validation schema exists, nor could it be inferred from the design:type metadata, for property "${propertyKey}". Please decorate the property with a type schema.`);
    }
    return schema;
}
/**
 * @param target
 * @param propertyKey
 * @param types - the constructors for allowed classes. If empty, all types are allowed. Note that "Object" is always allowed, to support union types like "number | null".
 */
function allowTypes(target, propertyKey, types) {
    if (types && types.length > 0) {
        const propertyType = getDesignType(target, propertyKey);
        if (propertyType !== Object && types.indexOf(propertyType) == -1) {
            throw new ConstraintDefinitionError(`Constrained property "${propertyKey}" has an unsupported type. Wanted ${types.map((t) => '"' + t.name + '"').join(' or ')}, found "${propertyType ? propertyType.name : propertyType}"`);
        }
    }
}
exports.allowTypes = allowTypes;
function verifyPeers(target, peers) {
    // Verify that the properties actually exist on the class.
    let notFound = [];
    for (let peer of peers) {
        let type = getDesignType(target, peer);
        if (type === undefined) {
            notFound.push(peer);
        }
    }
    if (notFound.length > 0) {
        let peersString = notFound.map((v) => `"${v}"`).join(', ');
        let msg;
        if (notFound.length == 1) {
            msg = `Peer/property ${peersString} does not exist.`;
        }
        else {
            msg = `Peers/properties ${peersString} do not exist.`;
        }
        throw new ConstraintDefinitionError(msg);
    }
}
exports.verifyPeers = verifyPeers;
