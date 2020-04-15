"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var query_1 = __importDefault(require("./query"));
var mutation_1 = __importDefault(require("./mutation"));
var subscribe_1 = __importDefault(require("./subscribe"));
exports.default = {
    Query: query_1.default,
    Mutation: mutation_1.default,
    Subscribe: subscribe_1.default
};
//# sourceMappingURL=index.js.map