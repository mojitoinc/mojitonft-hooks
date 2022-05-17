"use strict";

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

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDehydratedState = void 0;

var react_query_1 = require("react-query");

var data_1 = require("../data");

var general_constants_1 = require("../domain/general.constants");

var hooks_1 = require("../hooks");

var gqlDataNormalizer_util_1 = require("./gqlDataNormalizer.util");

var gqlRequest_util_1 = require("./gqlRequest.util");

function getDehydratedState(props, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h;

  if (options === void 0) {
    options = {
      loadSingleLotPageFullInfo: false
    };
  }

  return __awaiter(this, void 0, void 0, function () {
    var pathArr, singleLotPageSlug, auctionPageSlug, marketplaceCollectionsSlugQueryKey, collections, collectionByPath, collectionItemsId, pageSpecificRequests, mojitoLotId;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          pathArr = (_d = (_b = (_a = props.asPath) !== null && _a !== void 0 ? _a : props === null || props === void 0 ? void 0 : props.resolvedUrl) !== null && _b !== void 0 ? _b : (_c = props.req) === null || _c === void 0 ? void 0 : _c.url) === null || _d === void 0 ? void 0 : _d.split('#')[0].split('?')[0].split('/');
          singleLotPageSlug = pathArr && pathArr.length === 4 && pathArr[3];
          auctionPageSlug = pathArr && pathArr[1];
          if (auctionPageSlug == '500') return [2
          /*return*/
          , {
            dehydratedState: (0, react_query_1.dehydrate)(gqlRequest_util_1.queryClient)
          }];
          marketplaceCollectionsSlugQueryKey = ["Mojito ".concat(data_1.EMojitoQueries[data_1.EMojitoQueries.marketplaceCollectionsInfoWithItemsIdAndSlug]), {
            id: general_constants_1.config.MARKETPLACE_ID
          }];
          return [4
          /*yield*/
          , Promise.all([gqlRequest_util_1.queryClient.prefetchQuery(marketplaceCollectionsSlugQueryKey, gqlRequest_util_1.gqlRequest.bind(null, {
            query: data_1.mojitoQueries[data_1.EMojitoQueries.marketplaceCollectionsInfoWithItemsIdAndSlug],
            variables: {
              id: general_constants_1.config.MARKETPLACE_ID
            },
            normalizerFn: gqlDataNormalizer_util_1.mojitoNormalizer,
            gqlClient: hooks_1.mojitoGqlClient
          })), gqlRequest_util_1.queryClient.prefetchQuery(["Contentful ".concat(data_1.EContentfulQueries[data_1.EContentfulQueries.auctionsSlugList])], gqlRequest_util_1.gqlRequest.bind(null, {
            query: data_1.contentfulQueries[data_1.EContentfulQueries.auctionsSlugList],
            normalizerFn: gqlDataNormalizer_util_1.contentfulNormalizer,
            gqlClient: hooks_1.contentfulGqlClient
          })), gqlRequest_util_1.queryClient.prefetchQuery(["Contentful ".concat(data_1.EContentfulQueries[data_1.EContentfulQueries.organizations])], gqlRequest_util_1.gqlRequest.bind(null, {
            query: data_1.contentfulQueries[data_1.EContentfulQueries.organizations],
            normalizerFn: gqlDataNormalizer_util_1.contentfulNormalizer,
            gqlClient: hooks_1.contentfulGqlClient
          }))])];

        case 1:
          _j.sent();

          collections = (_f = (_e = gqlRequest_util_1.queryClient.getQueryState(marketplaceCollectionsSlugQueryKey)) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.marketplace.collections;
          collectionByPath = collections === null || collections === void 0 ? void 0 : collections.find(function (e) {
            return e.slug == auctionPageSlug;
          });
          if (!collectionByPath) return [3
          /*break*/
          , 4];
          collectionItemsId = collectionByPath.items.map(function (e) {
            return e.id;
          });
          pageSpecificRequests = [];

          if (options.loadSingleLotPageFullInfo) {
            mojitoLotId = (_g = collectionByPath.items.find(function (e) {
              return e.slug === singleLotPageSlug;
            })) === null || _g === void 0 ? void 0 : _g.id;

            if (mojitoLotId) {
              pageSpecificRequests.push(gqlRequest_util_1.queryClient.prefetchQuery(["Contentful ".concat(data_1.EContentfulQueries[data_1.EContentfulQueries.fullLot]), {
                mojitoId: mojitoLotId
              }], gqlRequest_util_1.gqlRequest.bind(null, {
                query: data_1.contentfulQueries[data_1.EContentfulQueries.fullLot],
                variables: {
                  slug: auctionPageSlug,
                  mojitoId: mojitoLotId
                },
                normalizerFn: gqlDataNormalizer_util_1.contentfulNormalizer,
                gqlClient: hooks_1.contentfulGqlClient
              })));
            }
          }

          return [4
          /*yield*/
          , Promise.all(__spreadArray([gqlRequest_util_1.queryClient.prefetchQuery(["Contentful ".concat(data_1.EContentfulQueries[data_1.EContentfulQueries.auctionBySlug]), {
            slug: auctionPageSlug
          }], gqlRequest_util_1.gqlRequest.bind(null, {
            query: data_1.contentfulQueries[data_1.EContentfulQueries.auctionBySlug],
            variables: {
              slug: auctionPageSlug
            },
            normalizerFn: gqlDataNormalizer_util_1.contentfulNormalizer,
            gqlClient: hooks_1.contentfulGqlClient
          })), gqlRequest_util_1.queryClient.prefetchQuery(["Contentful ".concat(data_1.EContentfulQueries[data_1.EContentfulQueries.shortLots]), {
            slug: auctionPageSlug
          }], gqlRequest_util_1.gqlRequest.bind(null, {
            query: data_1.contentfulQueries[data_1.EContentfulQueries.shortLots],
            variables: {
              slug: auctionPageSlug,
              mojitoIds: collectionItemsId
            },
            normalizerFn: gqlDataNormalizer_util_1.contentfulNormalizer,
            gqlClient: hooks_1.contentfulGqlClient
          }))], __read(pageSpecificRequests), false))];

        case 2:
          _j.sent();

          return [4
          /*yield*/
          , gqlRequest_util_1.queryClient.prefetchQuery(["Mojito ".concat(data_1.EMojitoQueries[data_1.EMojitoQueries.collectionBySlug]), {
            slug: auctionPageSlug,
            marketplaceID: general_constants_1.config.MARKETPLACE_ID
          }], gqlRequest_util_1.gqlRequest.bind(null, {
            query: data_1.mojitoQueries[data_1.EMojitoQueries.collectionBySlug],
            variables: {
              slug: auctionPageSlug,
              marketplaceID: general_constants_1.config.MARKETPLACE_ID
            },
            normalizerFn: gqlDataNormalizer_util_1.mojitoNormalizer,
            gqlClient: hooks_1.mojitoGqlClient
          }))];

        case 3:
          _j.sent();

          _j.label = 4;

        case 4:
          (_h = props.res) === null || _h === void 0 ? void 0 : _h.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
          return [2
          /*return*/
          , {
            dehydratedState: (0, react_query_1.dehydrate)(gqlRequest_util_1.queryClient)
          }];
      }
    });
  });
}

exports.getDehydratedState = getDehydratedState;
exports["default"] = getDehydratedState;