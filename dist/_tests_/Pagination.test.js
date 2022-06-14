"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _react = require("@testing-library/react");

var _Pagination = _interopRequireDefault(require("../components/Pagination"));

describe("Given I am on dataTable page", function () {
  test("Then, pagination of data table is render", function () {
    (0, _react.render)( /*#__PURE__*/React.createElement(_Pagination.default, {
      data: [{
        firstName: "Laura",
        lastName: "Nicolay"
      }],
      dataLimit: "10",
      currentPage: "1"
    }));
    expect(_react.screen.getByTestId("prev-button")).toBeTruthy();
    expect(_react.screen.getByTestId("next-button")).toBeTruthy();
    expect(_react.screen.getByTestId("page-number")).toBeTruthy();
  });
  test("Then, next button pagination call callback function on click", function () {
    var mockFn = jest.fn();
    (0, _react.render)( /*#__PURE__*/React.createElement(_Pagination.default, {
      data: [{
        firstName: "Laura",
        lastName: "Nicolay"
      }],
      dataLimit: "10",
      currentPage: "1",
      setCurrentPage: mockFn
    }));

    _react.fireEvent.click(_react.screen.getByTestId("next-button"));

    expect(mockFn).toHaveBeenCalled();
  });
  test("Then, previous button pagination call callback function on click", function () {
    var mockFn = jest.fn();
    (0, _react.render)( /*#__PURE__*/React.createElement(_Pagination.default, {
      data: [{
        firstName: "Laura",
        lastName: "Nicolay"
      }],
      dataLimit: "10",
      currentPage: "3",
      setCurrentPage: mockFn
    }));

    _react.fireEvent.click(_react.screen.getByTestId("prev-button"));

    expect(mockFn).toHaveBeenCalledWith(2);
  });
});