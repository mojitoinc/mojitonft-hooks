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

import { useCallback } from 'react';
import { EMojitoMutations } from '../data/graph_ql/mojito.mutations';
import { useCollectionItemBidsList, useCollectionItemCurrentBids, useMojitoMutation } from './useMojito';
export function usePlaceBidMutation(lotData) {
  var bidsRefetch = useCollectionItemBidsList(lotData.mojitoId).bidsRefetch;
  var currentBids = useCollectionItemCurrentBids(lotData.mojitoId).currentBids;

  var _a = __read(useMojitoMutation(EMojitoMutations.createBid), 2),
      mutateFunction = _a[0],
      mutateStatus = _a[1];

  var mutateFunctionWithSegment = useCallback(function (options) {
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