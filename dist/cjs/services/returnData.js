"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilterData = void 0;
var sortData_1 = require("./sortData");
/**
 * Get data filtered for dataTable
 * @returns data sorted if click on column, or data filtered with search input or data with pagination
 */
var getFilterData = function (data, order, valueSearch, currentPage, dataLimit) {
    // Sort data on clicked column
    var filterData = (0, sortData_1.getSort)(data, order);
    // If use search input
    if (valueSearch.length >= 1) {
        var dataFilter = filterData.filter(function (element) {
            return JSON.stringify(Object(element))
                .toLowerCase()
                .includes(valueSearch.toLowerCase());
        });
        return dataFilter;
    }
    // Pagination
    var startIndex = currentPage * dataLimit - dataLimit;
    var endIndex = startIndex + dataLimit;
    var sliceData = filterData.slice(startIndex, endIndex);
    return sliceData;
};
exports.getFilterData = getFilterData;
