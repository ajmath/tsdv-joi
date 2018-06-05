import { Schema, ObjectSchema } from "joi";
import * as joi from "joi";
export declare const WORKING_SCHEMA_KEY = "tsdv:working-schema";
export declare const SCHEMA_KEY = "tsdv:schema";
export declare let Joi: typeof joi;
export declare function registerJoi(customJoi: typeof joi): void;
export declare class ConstraintDefinitionError extends Error {
    message: string;
    name: string;
    constructor(message: string);
}
export declare type WorkingSchema = {
    [index: string]: Schema;
};
export declare function getWorkingSchema(target: object): WorkingSchema;
export declare function getMergedWorkingSchemas(target: object): WorkingSchema;
export declare function getJoiSchema(clz: Function): ObjectSchema;
export declare function getPropertySchema(target: object, propertyKey: string | symbol): Schema;
export declare function updateSchema(target: object, propertyKey: string | symbol, schema: Schema): void;
export declare function getAndUpdateSchema(target: object, propertyKey: string | symbol, updateFunction: (schema: Schema) => Schema): void;
export declare function constraintDecorator(allowedTypes: Function[], updateFunction: (schema: Schema) => Schema): PropertyDecorator;
export declare function constraintDecoratorWithPeers(allowedTypes: Function[], peers: string[], updateFunction: (schema: Schema) => Schema): PropertyDecorator;
export declare function typeConstraintDecorator(allowedTypes: Function[], typeSchema: (Joi: typeof joi) => Schema): (target: object, propertyKey: string | symbol) => void;
/**
 * @param target
 * @param propertyKey
 * @param types - the constructors for allowed classes. If empty, all types are allowed. Note that "Object" is always allowed, to support union types like "number | null".
 */
export declare function allowTypes(target: any, propertyKey: string | symbol, types: Function[]): void;
export declare function verifyPeers(target: object, peers: string[]): void;
