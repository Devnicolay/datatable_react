"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _react = require("@testing-library/react");

var _TableLength = _interopRequireDefault(require("../components/TableLength"));

describe("Given I am on dataTable page and I select number of show entries", function () {
  test("Then, dataTable call callback function on input change", function () {
    var mockFn = jest.fn();
    (0, _react.render)( /*#__PURE__*/React.createElement(_TableLength.default, {
      onChangeSelect: mockFn
    }));

    _react.fireEvent.change(_react.screen.getByTestId("table-select"), {
      target: {
        value: 10
      }
    });

    expect(mockFn).toHaveBeenCalledWith("10");
    expect(mockFn).not.toHaveBeenCalledWith("50");
    expect(_react.screen.getByTestId("table-select")).toBeTruthy();
    expect(_react.screen.getByText("10")).toBeTruthy();
  });
});