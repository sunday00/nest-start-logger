"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateGlobalValidateWithTransform = void 0;
const common_1 = require("@nestjs/common");
const activateGlobalValidateWithTransform = (app) => {
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
};
exports.activateGlobalValidateWithTransform = activateGlobalValidateWithTransform;
//# sourceMappingURL=pipe.js.map