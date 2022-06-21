"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TableLength = function (_a) {
    var onChangeSelect = _a.onChangeSelect;
    return (react_1.default.createElement("div", { className: "table-length" },
        react_1.default.createElement("label", null,
            "Show",
            react_1.default.createElement("select", { name: "tableLength", onChange: function (e) { return onChangeSelect(e.target.value); }, "data-testid": "table-select" },
                react_1.default.createElement("option", { value: "10" }, "10"),
                react_1.default.createElement("option", { value: "25" }, "25"),
                react_1.default.createElement("option", { value: "50" }, "50"),
                react_1.default.createElement("option", { value: "100" }, "100")),
            "entries")));
};
exports.default = TableLength;
