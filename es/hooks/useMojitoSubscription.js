var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

import { useAuth0 } from '@auth0/auth0-react';
import { SubscriptionClient } from 'graphql-subscriptions-client';
import { useEffect, useRef } from 'react';
import { EMojitoQueries, EMojitoSubscriptions, mojitoSubscriptions } from '../data';
import { config } from '../domain/general.constants';
import { mojitoNormalizer, queryClient } from '../utils';
import isBrowser from '../utils/isBrowser';
var client = null;

function getGqlSubscriptionClient(token) {
  if (!client) client = isBrowser ? new SubscriptionClient(config.MOJITO_API_URL.replace('https', 'wss'), __assign({
    reconnect: true,
    lazy: true,
    connectionCallback: function connectionCallback(error) {
      error && console.error(error);
    }
  }, token ? {
    connectionParams: {
      authorization: "Bearer ".concat(token)
    }
  } : {})) : null;
  return client;
}

function useSubscription(cb, subscriptionRef) {
  var _this = this;

  var _a = useAuth0(),
      isAuthenticated = _a.isAuthenticated,
      getIdTokenClaims = _a.getIdTokenClaims,
      isLoading = _a.isLoading;

  useEffect(function () {
    (function () {
      return __awaiter(_this, void 0, void 0, function () {
        var token, _a;

        var _b;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              if (!!isLoading) return [3
              /*break*/
              , 4];
              if (!isAuthenticated) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , getIdTokenClaims()];

            case 1:
              _a = _c.sent();
              return [3
              /*break*/
              , 3];

            case 2:
              _a = null;
              _c.label = 3;

            case 3:
              token = _a;
              (_b = subscriptionRef === null || subscriptionRef === void 0 ? void 0 : subscriptionRef.unsubscribe) === null || _b === void 0 ? void 0 : _b.call(subscriptionRef);
              cb(token === null || token === void 0 ? void 0 : token.__raw);
              _c.label = 4;

            case 4:
              return [2
              /*return*/
              ];
          }
        });
      });
    })();
  }, [isAuthenticated, isLoading]);
  useEffect(function () {
    return function () {
      var _a;

      (_a = subscriptionRef === null || subscriptionRef === void 0 ? void 0 : subscriptionRef.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(subscriptionRef);
    };
  }, []);
}

export function useMojitoOneLotSubscription(lotId, collectionSlug) {
  var subscription = useRef();
  useSubscription(subscribe, subscription.current);

  function subscribe(token) {
    var _a;

    subscription.current = (_a = getGqlSubscriptionClient(token)) === null || _a === void 0 ? void 0 : _a.request({
      query: mojitoSubscriptions[EMojitoSubscriptions.getMarketplaceAuctionLot],
      variables: {
        marketplaceAuctionLotId: lotId
      }
    }).subscribe({
      next: function next(_a) {
        var newLotDetails = _a.data.getMarketplaceAuctionLot;

        if (newLotDetails) {
          queryClient.setQueryData(["Mojito ".concat(EMojitoQueries[EMojitoQueries.collectionBySlugCurrentBids]), {
            marketplaceID: config.MARKETPLACE_ID,
            slug: collectionSlug
          }], function (data) {
            var _a, _b;

            if (!data) return {};
            Object.assign((_b = (_a = data === null || data === void 0 ? void 0 : data.items) === null || _a === void 0 ? void 0 : _a.find(function (e) {
              return e.details.id === newLotDetails.id;
            })) === null || _b === void 0 ? void 0 : _b.details, newLotDetails);
            return mojitoNormalizer({
              collectionBySlug: data
            }, {
              slug: collectionSlug
            });
          });
        }
      }
    }, function (e) {
      return console.error(e);
    });
  }
}
export function useCollectionItemBidsSubscription(itemId, lotId, collectionSlug) {
  var subscription = useRef();
  useSubscription(subscribe, subscription.current);

  function subscribe(token) {
    var _a;

    subscription.current = (_a = getGqlSubscriptionClient(token)) === null || _a === void 0 ? void 0 : _a.request({
      query: mojitoSubscriptions[EMojitoSubscriptions.collectionItemBids],
      variables: {
        marketplaceAuctionLotId: lotId
      }
    }).subscribe({
      next: function next(_a) {
        var newLotDetails = _a.data.getMarketplaceAuctionLot;

        if (newLotDetails) {
          queryClient.setQueryData(["Mojito ".concat(EMojitoQueries[EMojitoQueries.collectionItemByIdBidsList]), {
            id: itemId,
            slug: collectionSlug
          }], function () {
            return mojitoNormalizer({
              collectionItemById: {
                id: itemId,
                details: newLotDetails
              }
            }, {
              slug: collectionSlug
            });
          });
        }
      }
    }, function (e) {
      return console.error(e);
    });
  }
}
export function useMojitoCollectionSubscription(collectionSlug, collectionId) {
  var subscription = useRef();
  useSubscription(subscribe, subscription.current);

  function subscribe(token) {
    var _a;

    subscription.current = (_a = getGqlSubscriptionClient(token)) === null || _a === void 0 ? void 0 : _a.request({
      query: mojitoSubscriptions[EMojitoSubscriptions.marketplaceCollectionLotsUpdates],
      variables: {
        slug: collectionSlug,
        collectionId: collectionId
      }
    }).subscribe({
      next: function next(_a) {
        var newLotDetails = _a.data.marketplaceCollectionLotsUpdates;

        if (newLotDetails) {
          queryClient.setQueryData(["Mojito ".concat(EMojitoQueries[EMojitoQueries.collectionBySlugCurrentBids]), {
            slug: collectionSlug,
            marketplaceID: config.MARKETPLACE_ID
          }], function (data) {
            var _a, _b;

            if (!data) return {};
            Object.assign((_b = (_a = data === null || data === void 0 ? void 0 : data.items) === null || _a === void 0 ? void 0 : _a.find(function (e) {
              return e.details.id === newLotDetails.id;
            })) === null || _b === void 0 ? void 0 : _b.details, newLotDetails);
            return mojitoNormalizer({
              collectionBySlug: data
            }, {
              slug: collectionSlug
            });
          });
        }
      }
    }, function (e) {
      return console.error(e);
    });
  }
}