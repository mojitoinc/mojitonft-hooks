export var InvoiceStatus;

(function (InvoiceStatus) {
  InvoiceStatus[InvoiceStatus["Draft"] = 0] = "Draft";
  InvoiceStatus[InvoiceStatus["Pending"] = 1] = "Pending";
  InvoiceStatus[InvoiceStatus["Canceled"] = 2] = "Canceled";
  InvoiceStatus[InvoiceStatus["Paid"] = 3] = "Paid";
})(InvoiceStatus || (InvoiceStatus = {}));