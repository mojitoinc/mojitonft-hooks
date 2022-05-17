"use strict";

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCheckCollectionItemsSaleStatus = void 0;

var ahooks_1 = require("ahooks");

var react_1 = require("react");

var enums_1 = require("../domain/enums");

var useCheckCollectionItemsSaleStatus = function useCheckCollectionItemsSaleStatus(items) {
  var _a = __read((0, ahooks_1.useSetState)({
    haveActiveAuctionItems: false,
    haveActiveBuyNowItems: false
  }), 2),
      state = _a[0],
      setState = _a[1];

  (0, react_1.useEffect)(function () {
    if (items === null || items === void 0 ? void 0 : items.length) {
      var haveActiveAuctionItems = !!items.filter(function (item) {
        var _a, _b;

        return item.saleType === enums_1.SaleType.Auction && ((_b = (_a = item.details) === null || _a === void 0 ? void 0 : _a.saleView) === null || _b === void 0 ? void 0 : _b.isDuringSale);
      }).length;
      var haveActiveBuyNowItems = !!items.filter(function (item) {
        var _a, _b;

        return item.saleType === enums_1.SaleType.BuyNow && ((_b = (_a = item.details) === null || _a === void 0 ? void 0 : _a.saleView) === null || _b === void 0 ? void 0 : _b.isDuringSale);
      }).length;
      setState({
        haveActiveAuctionItems: haveActiveAuctionItems,
        haveActiveBuyNowItems: haveActiveBuyNowItems
      });
    }
  }, [items]);
  return state;
};

exports.useCheckCollectionItemsSaleStatus = useCheckCollectionItemsSaleStatus;