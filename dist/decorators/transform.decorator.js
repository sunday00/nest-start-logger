"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToNum = exports.ToNumber = void 0;
const class_transformer_1 = require("class-transformer");
function ToNumber() {
    return function (target, propertyName) {
        const value = 11;
        target[propertyName] = 1111;
        console.log(target);
        return {
            get: () => value
        };
    };
}
exports.ToNumber = ToNumber;
function ToNum() {
    return (0, class_transformer_1.Transform)(v => Number(v.value));
}
exports.ToNum = ToNum;
//# sourceMappingURL=transform.decorator.js.map