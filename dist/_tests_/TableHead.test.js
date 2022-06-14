"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _react = require("@testing-library/react");

var _TableHead = _interopRequireDefault(require("../components/TableHead"));

var _columns = require("../columns/columns");

var _sortData = require("../services/sortData");

var _react2 = _interopRequireDefault(require("react"));

jest.mock("../services/sortData", function () {
  return {
    sorting: jest.fn()
  };
});
describe("Given I am on dataTable page", function () {
  test("Then, datatTable display name of columns", function () {
    var order = {
      order: "ASC",
      column: null,
      type: null
    };
    (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_TableHead.default, {
      columns: _columns.columns,
      order: order
    }));
    expect(_react.screen.getByText("First Name")).toBeTruthy();
  });
});
describe("Given I am on dataTable page and I click on firstName column", function () {
  test("Then, dataTable head call callback function for sorting firstname column", function () {
    var order = {
      order: "ASC",
      column: null,
      type: null
    };
    (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_TableHead.default, {
      columns: _columns.columns,
      order: order
    }));

    _react.fireEvent.click(_react.screen.getByTestId("firstName"));

    expect(_sortData.sorting).toHaveBeenCalled();
  });
});