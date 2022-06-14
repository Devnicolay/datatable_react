"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _react = require("@testing-library/react");

var _DataTable = _interopRequireDefault(require("../components/DataTable"));

var _columns = require("../columns/columns");

describe("Given I am on dataTable page", function () {
  test("Then, dataTable is render", function () {
    (0, _react.render)( /*#__PURE__*/React.createElement(_DataTable.default, {
      data: [{
        firstName: "Laura",
        region: "meurthe et moselle"
      }],
      columns: _columns.columns
    }));
    expect(_react.screen.getByText("Laura")).toBeTruthy();
    expect(_react.screen.queryByText("meurthe et moselle")).toBeFalsy();
    expect(_react.screen.queryByText("region")).toBeFalsy();
    expect(_react.screen.getByText("First Name")).toBeTruthy();
    expect(_react.screen.getByText("Last Name")).toBeTruthy();
    expect(_react.screen.getByText("Start Date")).toBeTruthy();
    expect(_react.screen.getByText("Department")).toBeTruthy();
    expect(_react.screen.getByText("Date of Birth")).toBeTruthy();
    expect(_react.screen.getByText("Street")).toBeTruthy();
    expect(_react.screen.getByText("City")).toBeTruthy();
    expect(_react.screen.getByText("State")).toBeTruthy();
    expect(_react.screen.getByText("Zip Code")).toBeTruthy();
  });
});