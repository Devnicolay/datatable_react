"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.sorting = exports.getSort = void 0;

/**
 * Sort data on clicked column
 * @param data data of dataTable
 */
var getSort = function getSort(data, order) {
  // Sort date type
  if (order.type === "date") {
    if (order.order === "ASC" && order.column) {
      var sorted = data.slice(0).sort(function (a, b) {
        return new Date(a[order.column]) > new Date(b[order.column]) ? 1 : -1;
      });
      return sorted;
    }

    if (order.order === "DESC" && order.column) {
      var _sorted = data.slice(0).sort(function (a, b) {
        return new Date(a[order.column]) < new Date(b[order.column]) ? 1 : -1;
      });

      return _sorted;
    }
  }

  // Sort number type
  if (order.type === "number") {
    if (order.order === "ASC" && order.column) {
      return data.sort(function (a, b) {
        return a[order.column] > b[order.column] ? 1 : -1;
      });
    }

    if (order.order === "DESC" && order.column) {
      return data.sort(function (a, b) {
        return a[order.column] < b[order.column] ? 1 : -1;
      });
    }
  }

  // Sort string type
  if (order.order === "ASC" && order.column) {
    return data.sort(function (a, b) {
      return a[order.column].toLowerCase() > b[order.column].toLowerCase()
        ? 1
        : -1;
    });
  }

  if (order.order === "DESC" && order.column) {
    return data.sort(function (a, b) {
      return a[order.column].toLowerCase() < b[order.column].toLowerCase()
        ? 1
        : -1;
    });
  }

  return data;
};
/**
 *
 * Change ASC and DESC for column cliked
 * @param col column clicked for sort
 */

exports.getSort = getSort;

var sorting = function sorting(col, type, order, setOrder) {
  if (order.column === col) {
    setOrder({
      order: order.order === "ASC" ? "DESC" : "ASC",
      column: col,
      type: type,
    });
  } else {
    setOrder({
      order: "ASC",
      column: col,
      type: type,
    });
  }
};

exports.sorting = sorting;
