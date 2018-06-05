import { Reference } from "joi";
export declare function DateSchema(): PropertyDecorator;
export declare function Iso(): PropertyDecorator;
export declare function Max(limit: number | 'now' | string | Date | Reference): PropertyDecorator;
export declare function Min(limit: number | 'now' | string | Date | Reference): PropertyDecorator;
export declare function Timestamp(type?: 'unix' | 'javascript'): PropertyDecorator;
