"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Pagination = function (_a) {
    var data = _a.data, dataLimit = _a.dataLimit, setCurrentPage = _a.setCurrentPage, currentPage = _a.currentPage;
    var pages = (0, react_1.useState)(Math.ceil(data.length / dataLimit))[0];
    var goToNextPage = function () {
        setCurrentPage(currentPage + 1);
    };
    var goToPreviousPage = function () {
        setCurrentPage(currentPage - 1);
    };
    var changePage = function (e) {
        var pageNumber = Number(e.target.textContent);
        setCurrentPage(pageNumber);
    };
    var pageNumbers = [];
    for (var i = 1; i <= Math.ceil(data.length / dataLimit); i++) {
        pageNumbers.push(i);
    }
    return (react_1.default.createElement("div", { className: "pagination" },
        react_1.default.createElement("button", { onClick: goToPreviousPage, className: "prev ".concat(currentPage === 1 ? "disabled" : ""), "data-testid": "prev-button" }, "Previous"),
        pageNumbers.map(function (number) { return (react_1.default.createElement("button", { key: number, onClick: changePage, className: "paginationItem ".concat(currentPage === number ? "active" : null), "data-testid": "page-number" },
            react_1.default.createElement("span", null, number))); }),
        react_1.default.createElement("button", { onClick: goToNextPage, className: "next ".concat(currentPage === pages ? "disabled" : ""), "data-testid": "next-button" }, "Next")));
};
exports.default = Pagination;
