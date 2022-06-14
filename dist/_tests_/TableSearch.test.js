"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _react = require("@testing-library/react");

var _TableSearch = _interopRequireDefault(require("../components/TableSearch"));

describe("Given I am on dataTable page", function () {
  test("Then, display search input", function () {
    (0, _react.render)( /*#__PURE__*/React.createElement(_TableSearch.default, null));
    expect(_react.screen.getByText("Search:")).toBeTruthy();
    expect(_react.screen.getByTestId("table-search")).toBeTruthy();
  });
});
describe("Given I am on dataTable page and I enter word in input search", function () {
  test("Then, dataTable call callback function on input search", function () {
    var mockFn = jest.fn();
    (0, _react.render)( /*#__PURE__*/React.createElement(_TableSearch.default, {
      onChangeSearch: mockFn
    }));

    _react.fireEvent.change(_react.screen.getByTestId("table-search"), {
      target: {
        value: "laura"
      }
    });

    expect(mockFn).toHaveBeenCalledWith("laura");
    expect(mockFn).not.toHaveBeenCalledWith("pierre");
  });
});