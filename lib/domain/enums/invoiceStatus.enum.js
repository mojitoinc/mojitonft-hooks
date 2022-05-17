"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceStatus = void 0;
var InvoiceStatus;

(function (InvoiceStatus) {
  InvoiceStatus[InvoiceStatus["Draft"] = 0] = "Draft";
  InvoiceStatus[InvoiceStatus["Pending"] = 1] = "Pending";
  InvoiceStatus[InvoiceStatus["Canceled"] = 2] = "Canceled";
  InvoiceStatus[InvoiceStatus["Paid"] = 3] = "Paid";
})(InvoiceStatus = exports.InvoiceStatus || (exports.InvoiceStatus = {}));