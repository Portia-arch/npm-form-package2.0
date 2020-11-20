"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DummyComponent;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DummyComponent() {
  var _useForm = useForm(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var onSubmit = function onSubmit(data) {
    return alert(JSON.stringify(data));
  };

  return /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react["default"].createElement("input", {
    name: "firstName",
    ref: register,
    placeholder: "First name"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    name: "lastName",
    ref: register,
    placeholder: "Last name"
  }), /*#__PURE__*/_react["default"].createElement("select", {
    name: "category",
    ref: register
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "Select..."), /*#__PURE__*/_react["default"].createElement("option", {
    value: "A"
  }, "Category A"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "B"
  }, "Category B")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "submit"
  }));
}
