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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useContentfulAuctionsSlugList = exports.useContentfulLots = exports.useContentfulCollectors = exports.useContentfulAuthors = exports.useContentfulFullLot = exports.useContentfulShortLots = exports.useContentful = exports.contentfulGqlClient = void 0;

var graphql_request_1 = require("graphql-request");

var react_query_1 = require("react-query");

var data_1 = require("../data");

var general_constants_1 = require("../domain/general.constants");

var utils_1 = require("../utils");

exports.contentfulGqlClient = new graphql_request_1.GraphQLClient(general_constants_1.config.CONTENTFUL_URL, {
  headers: {
    Authorization: "Bearer ".concat(general_constants_1.config.CONTENTFUL_AUTH_TOKEN)
  }
});

function useContentful(query, variables, options) {
  var _this = this;

  var queryKey = ["Contentful ".concat(data_1.EContentfulQueries[query])];
  if (variables) queryKey.push(variables);
  var result = (0, react_query_1.useQuery)(queryKey, function () {
    return __awaiter(_this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , (0, utils_1.gqlRequest)({
              query: data_1.contentfulQueries[query],
              variables: variables,
              normalizerFn: utils_1.contentfulNormalizer,
              gqlClient: exports.contentfulGqlClient
            })];

          case 1:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  }, options);
  return __assign({
    loading: result.isLoading
  }, result);
}

exports.useContentful = useContentful;

function useContentfulShortLots(mojitoID) {
  var _a = useContentful(data_1.EContentfulQueries.shortLots, {
    mojitoIds: Array.isArray(mojitoID) ? mojitoID : [mojitoID]
  }),
      data = _a.data,
      error = _a.error,
      loading = _a.loading;

  if (error) console.error(error);
  return {
    lots: data !== null && data !== void 0 ? data : [],
    lotError: error,
    lotLoading: loading
  };
}

exports.useContentfulShortLots = useContentfulShortLots;

function useContentfulFullLot(mojitoID) {
  var _a = useContentful(data_1.EContentfulQueries.fullLot, {
    mojitoId: mojitoID
  }),
      data = _a.data,
      error = _a.error,
      loading = _a.loading;

  if (error) console.error(error);
  return {
    lot: data ? Object.values(data)[0] : null,
    lotError: error,
    lotLoading: loading
  };
}

exports.useContentfulFullLot = useContentfulFullLot;

function useContentfulAuthors() {
  var _a, _b;

  var _c = useContentful(data_1.EContentfulQueries.authors),
      data = _c.data,
      error = _c.error,
      loading = _c.loading;

  if (error) console.error(error);
  return {
    authors: (_b = (_a = data === null || data === void 0 ? void 0 : data.authorCollection) === null || _a === void 0 ? void 0 : _a.items) !== null && _b !== void 0 ? _b : [],
    authorsError: error,
    authorsLoading: loading
  };
}

exports.useContentfulAuthors = useContentfulAuthors;

function useContentfulCollectors() {
  var _a, _b;

  var _c = useContentful(data_1.EContentfulQueries.collectors),
      data = _c.data,
      error = _c.error,
      loading = _c.loading;

  if (error) console.error(error);
  return {
    collectors: (_b = (_a = data === null || data === void 0 ? void 0 : data.collectorCollection) === null || _a === void 0 ? void 0 : _a.items) !== null && _b !== void 0 ? _b : [],
    collectorsError: error,
    collectorsLoading: loading
  };
}

exports.useContentfulCollectors = useContentfulCollectors;

function useContentfulLots(mojitoIds) {
  var _a = useContentful(data_1.EContentfulQueries.shortLots, mojitoIds),
      data = _a.data,
      error = _a.error,
      loading = _a.loading;

  if (error) console.error(error);
  return {
    lots: data !== null && data !== void 0 ? data : {},
    lotsError: error,
    lotsLoading: loading
  };
}

exports.useContentfulLots = useContentfulLots;

function useContentfulAuctionsSlugList() {
  var _a, _b, _c;

  var _d = useContentful(data_1.EContentfulQueries.auctionsSlugList),
      data = _d.data,
      error = _d.error,
      loading = _d.loading;

  if (error) console.error(error);
  return {
    auctionsSlugList: (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.auctionCollection) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.map(function (collection) {
      return collection.slug;
    })) !== null && _c !== void 0 ? _c : [],
    auctionsSlugListLoading: loading,
    auctionsSlugListError: error
  };
}

exports.useContentfulAuctionsSlugList = useContentfulAuctionsSlugList;