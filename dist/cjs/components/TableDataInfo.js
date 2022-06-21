"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TableDataInfo = function (_a) {
    var dataLimit = _a.dataLimit, dataLength = _a.dataLength, currentPage = _a.currentPage;
    var indexDataStartForPage = dataLimit * currentPage - dataLimit + 1;
    var dataLengthPage = dataLimit * currentPage;
    return (react_1.default.createElement("div", { className: "dataTable-info" }, dataLengthPage < dataLength ? (react_1.default.createElement("p", null,
        "Showing ",
        indexDataStartForPage,
        " to ",
        dataLengthPage,
        " of ",
        dataLength,
        " ",
        "entries")) : (react_1.default.createElement("p", null,
        "Showing ",
        indexDataStartForPage,
        " to ",
        dataLength,
        " of ",
        dataLength,
        " ",
        "entries"))));
};
exports.default = TableDataInfo;
