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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
// @ts-ignore
var Pagination_1 = __importDefault(require("./Pagination"));
// @ts-ignore
var TableBody_1 = __importDefault(require("./TableBody"));
// @ts-ignore
var TableDataInfo_1 = __importDefault(require("./TableDataInfo"));
// @ts-ignore
var TableHead_1 = __importDefault(require("./TableHead"));
// @ts-ignore
var TableLength_1 = __importDefault(require("./TableLength"));
// @ts-ignore
var TableSearch_1 = __importDefault(require("./TableSearch"));
var returnData_1 = require("../services/returnData");
var DataTable = function (_a) {
    var data = _a.data, columns = _a.columns;
    var _b = (0, react_1.useState)(""), valueSearch = _b[0], setValueSearch = _b[1];
    var _c = (0, react_1.useState)({
        order: "ASC",
        column: null,
        type: null,
    }), order = _c[0], setOrder = _c[1];
    var _d = (0, react_1.useState)(1), currentPage = _d[0], setCurrentPage = _d[1];
    var _e = (0, react_1.useState)(10), dataLimit = _e[0], setDataLimit = _e[1];
    /**
     * Get value for search input ok dataTable
     * @param valueTarget value for search input
     */
    var onChangeSearch = function (valueTarget) {
        setValueSearch(valueTarget);
    };
    /**
     * Get value for select entries of dataTable
     * @param valueTarget value for select entries
     */
    var onChangeSelect = function (valueTarget) {
        setDataLimit(valueTarget);
    };
    (0, react_1.useEffect)(function () {
        setCurrentPage(1);
    }, [valueSearch, dataLimit]);
    var filterData = (0, returnData_1.getFilterData)(data, order, valueSearch, currentPage, dataLimit);
    return (react_1.default.createElement("div", { className: "container-data-table" },
        react_1.default.createElement("div", { className: "data-table-head" },
            react_1.default.createElement(TableLength_1.default, { onChangeSelect: onChangeSelect }),
            react_1.default.createElement(TableSearch_1.default, { onChangeSearch: onChangeSearch })),
        react_1.default.createElement("table", { id: "data-table" },
            react_1.default.createElement(TableHead_1.default, { columns: columns, order: order, setOrder: setOrder }),
            react_1.default.createElement(TableBody_1.default, { columns: columns, data: (0, returnData_1.getFilterData)(data, order, valueSearch, currentPage, dataLimit) })),
        react_1.default.createElement("div", null, filterData.length < 1 ? (react_1.default.createElement("div", { className: "no-data" },
            react_1.default.createElement("p", null, "No data found"))) : null),
        react_1.default.createElement("div", { className: "data-table-bottom" },
            react_1.default.createElement(TableDataInfo_1.default, { dataLimit: dataLimit, dataLength: data.length, currentPage: currentPage }),
            react_1.default.createElement(Pagination_1.default, { data: data, dataLimit: dataLimit, setCurrentPage: setCurrentPage, currentPage: currentPage }))));
};
exports.default = DataTable;
