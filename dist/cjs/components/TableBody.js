"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TableBody = function (_a) {
    var columns = _a.columns, data = _a.data;
    return (react_1.default.createElement("tbody", null, data.map(function (item, index) {
        return (react_1.default.createElement("tr", { key: index }, columns.map(function (col) {
            return react_1.default.createElement("td", { key: col.id }, item[col.id]);
        })));
    })));
};
exports.default = TableBody;
