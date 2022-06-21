"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var sortData_1 = require("../services/sortData");
// const HandleClick = (e) => {
//   e.target.style.backgroundColor = "#FAFAFA";
// };
var TableHead = function (_a) {
    var columns = _a.columns, order = _a.order, setOrder = _a.setOrder;
    return (react_1.default.createElement("thead", null,
        react_1.default.createElement("tr", null, columns.map(function (item) {
            return (react_1.default.createElement("th", { id: item.id, key: item.id, onClick: function () { return (0, sortData_1.sorting)(item.id, item.type, order, setOrder); }, "data-testid": item.id },
                item.label,
                react_1.default.createElement("div", { className: "icons-sort" }, order.column === item.id ? (order.column === item.id && order.order === "ASC" ? (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "sortAsc", icon: free_solid_svg_icons_1.faSortUp })) : (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "sortDesc", icon: free_solid_svg_icons_1.faSortDown }))) : (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "sortDesc", icon: free_solid_svg_icons_1.faSort })))));
        }))));
};
exports.default = TableHead;
