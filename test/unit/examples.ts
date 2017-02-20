import * as chai from "chai";
import AssertStatic = Chai.AssertStatic;
const assert : AssertStatic = chai.assert;
import {Validator} from "../../src/Validator";
import {Length} from "../../src/constraints/string";
import {isValid} from "./testUtil";
import {isInvalid} from "./testUtil";
import {registerJoi} from "../../src/core";
import * as Joi from "joi";

registerJoi(Joi);

describe('Examples', function () {
    it('class with methods', function () {
        const validator = new Validator();

        class ClassToValidate {
            @Length(5)
            public myProperty : string;

            public myMethod() {

            }
        }

        const instance = new ClassToValidate();
        instance.myProperty = "abcde";

        isValid(validator, instance);

        //instance.myMethod();
    });

    it('class with unvalidated properties', function () {
        const validator = new Validator();

        class ClassToValidate {
            @Length(5)
            public myProperty : string;

            public myOtherProperty : string;
        }

        const instance = new ClassToValidate();
        instance.myProperty = "abcde";
        instance.myOtherProperty = "abcde";

        isInvalid(validator, instance);
    });

    it('class with static properties', function () {
        const validator = new Validator();

        class ClassToValidate {
            static STATIC_PROPERTY = "bloop";

            @Length(5)
            public myProperty : string;

        }

        const instance = new ClassToValidate();
        instance.myProperty = "abcde";

        isValid(validator, instance);
    });
});