"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TableSearch = function (_a) {
    var onChangeSearch = _a.onChangeSearch;
    return (react_1.default.createElement("form", { className: "search" },
        react_1.default.createElement("label", null, "Search:"),
        react_1.default.createElement("input", { type: "text", onChange: function (e) { return onChangeSearch(e.target.value); }, "data-testid": "table-search" })));
};
exports.default = TableSearch;
