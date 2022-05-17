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
exports.usePlaceBidMutation = void 0;

var react_1 = require("react");

var mojito_mutations_1 = require("../data/graph_ql/mojito.mutations");

var useMojito_1 = require("./useMojito");

function usePlaceBidMutation(lotData) {
  var bidsRefetch = (0, useMojito_1.useCollectionItemBidsList)(lotData.mojitoId).bidsRefetch;
  var currentBids = (0, useMojito_1.useCollectionItemCurrentBids)(lotData.mojitoId).currentBids;

  var _a = __read((0, useMojito_1.useMojitoMutation)(mojito_mutations_1.EMojitoMutations.createBid), 2),
      mutateFunction = _a[0],
      mutateStatus = _a[1];

  var mutateFunctionWithSegment = (0, react_1.useCallback)(function (options) {
    return mutateFunction(options).then(function (result) {
      var lotId = lotData.lotId,
          mojitoId = lotData.mojitoId,
          slug = lotData.slug;
      if (result && currentBids.details.currentBid.isHold) bidsRefetch();
      return result;
    });
  }, [mutateFunction, lotData, bidsRefetch, currentBids.details.currentBid.isHold]); // @ts-ignore

  return [mutateFunctionWithSegment, mutateStatus];
}

exports.usePlaceBidMutation = usePlaceBidMutation;