"use strict";

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

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCollection = void 0;

var auth0_react_1 = require("@auth0/auth0-react");

var react_query_1 = require("react-query");

var data_1 = require("../../data");

var general_constants_1 = require("../../domain/general.constants");

var hooks_1 = require("../../hooks");

var utils_1 = require("../../utils");

function useCollection(props) {
  var _this = this;

  if (props === void 0) {
    props = {};
  }

  var getIdTokenClaims = (0, auth0_react_1.useAuth0)().getIdTokenClaims;
  var marketplaceCollectionsSlugWithItemsId = (0, hooks_1.useMarketplaceCollectionsSlugWithItemsId)().marketplaceCollectionsSlugWithItemsId;
  var auctionsSlugList = (0, hooks_1.useContentfulAuctionsSlugList)().auctionsSlugList;
  var auctionSlug = utils_1.getPath === null || utils_1.getPath === void 0 ? void 0 : utils_1.getPath[1];
  var collectionByPath = marketplaceCollectionsSlugWithItemsId === null || marketplaceCollectionsSlugWithItemsId === void 0 ? void 0 : marketplaceCollectionsSlugWithItemsId.find(function (e) {
    return e.slug == auctionSlug;
  });
  var isAuction = !!collectionByPath && auctionsSlugList.includes(auctionSlug);
  var isFakeAuction = !!collectionByPath && !auctionsSlugList.includes(auctionSlug);
  var queryKey = ["Mojito ".concat(data_1.EMojitoQueries[data_1.EMojitoQueries.collectionBySlug]), {
    slug: auctionSlug,
    marketplaceID: general_constants_1.config.MARKETPLACE_ID
  }];

  var _a = (0, react_query_1.useQuery)(queryKey, function () {
    return __awaiter(_this, void 0, void 0, function () {
      var token, collectionItems;

      var _a;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , getIdTokenClaims()];

          case 1:
            token = _b.sent();

            if (token) {
              hooks_1.mojitoGqlClient.setHeader('authorization', "Bearer ".concat(token.__raw));
            }

            if (!isAuction && !isFakeAuction) return [2
            /*return*/
            , null];
            collectionItems = (_a = collectionByPath === null || collectionByPath === void 0 ? void 0 : collectionByPath.items) === null || _a === void 0 ? void 0 : _a.map(function (e) {
              return e.id;
            });
            return [4
            /*yield*/
            , Promise.all([utils_1.queryClient.prefetchQuery(["Contentful ".concat(data_1.EContentfulQueries[data_1.EContentfulQueries.auctionBySlug]), {
              slug: auctionSlug
            }], utils_1.gqlRequest.bind(null, {
              query: data_1.contentfulQueries[data_1.EContentfulQueries.auctionBySlug],
              variables: {
                slug: auctionSlug
              },
              normalizerFn: utils_1.contentfulNormalizer,
              gqlClient: hooks_1.contentfulGqlClient
            })), utils_1.queryClient.prefetchQuery(["Contentful ".concat(data_1.EContentfulQueries[data_1.EContentfulQueries.shortLots]), {
              slug: auctionSlug
            }], utils_1.gqlRequest.bind(null, {
              query: data_1.contentfulQueries[data_1.EContentfulQueries.shortLots],
              variables: {
                slug: auctionSlug,
                mojitoIds: collectionItems
              },
              normalizerFn: utils_1.contentfulNormalizer,
              gqlClient: hooks_1.contentfulGqlClient
            }))])];

          case 2:
            _b.sent();

            return [4
            /*yield*/
            , (0, utils_1.gqlRequest)({
              query: data_1.mojitoQueries[data_1.EMojitoQueries.collectionBySlug],
              variables: {
                slug: auctionSlug,
                marketplaceID: general_constants_1.config.MARKETPLACE_ID
              },
              normalizerFn: utils_1.mojitoNormalizer,
              gqlClient: hooks_1.mojitoGqlClient
            })];

          case 3:
            return [2
            /*return*/
            , _b.sent()];
        }
      });
    });
  }, // @ts-ignore
  (props === null || props === void 0 ? void 0 : props.options) ? __assign({}, props === null || props === void 0 ? void 0 : props.options) : {}),
      data = _a.data,
      result = __rest(_a, ["data"]); // @ts-ignore


  return __assign({
    slug: isAuction || isFakeAuction ? auctionSlug : '',
    isAuction: isAuction,
    isFakeAuction: isFakeAuction
  }, (props === null || props === void 0 ? void 0 : props.selector) ? {
    data: data
  } : __assign({
    collection: data !== null && data !== void 0 ? data : null
  }, result));
}

exports.useCollection = useCollection;