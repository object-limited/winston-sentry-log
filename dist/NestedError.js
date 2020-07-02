"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NestedError extends Error {
    constructor(error, message) {
        super(message ?? error.message);
        this.nestedError = error;
    }
}
exports.NestedError = NestedError;
//# sourceMappingURL=NestedError.js.map