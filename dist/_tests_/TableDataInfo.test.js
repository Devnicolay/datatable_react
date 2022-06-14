"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _react = require("@testing-library/react");

var _TableDataInfo = _interopRequireDefault(require("../components/TableDataInfo"));

describe("Given I am on dataTable page", function () {
  test("that dataTable info for number of data on current page is render", function () {
    (0, _react.render)( /*#__PURE__*/React.createElement(_TableDataInfo.default, {
      dataLimit: 10,
      dataLength: 34,
      currentPage: 1
    }));
    expect(_react.screen.getByText("Showing 1 to 10 of 34 entries")).toBeTruthy();
  });
});