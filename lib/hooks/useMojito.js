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
exports.useCollectionItemRemainingCount = exports.useCollectionItemBidsList = exports.useCollectionItemCurrentBids = exports.useMarketplaceCollectionsSlugWithItemsId = exports.useCollectionLotsIdList = exports.useMojitoMutation = exports.useLazyMojito = exports.useMojito = exports.mojitoGqlClient = void 0;

var auth0_react_1 = require("@auth0/auth0-react");

var ahooks_1 = require("ahooks");

var graphql_request_1 = require("graphql-request");

var react_query_1 = require("react-query");

var data_1 = require("../data");

var general_constants_1 = require("../domain/general.constants");

var utils_1 = require("../utils");

var useCollection_1 = require("./useCollection");

exports.mojitoGqlClient = new graphql_request_1.GraphQLClient(general_constants_1.config.MOJITO_API_URL);

function useMojito(_a) {
  var _this = this;

  var query = _a.query,
      variables = _a.variables,
      options = _a.options,
      _b = _a.force,
      force = _b === void 0 ? false : _b,
      onlyAuthenticated = _a.onlyAuthenticated;

  var _c = (0, auth0_react_1.useAuth0)(),
      getIdTokenClaims = _c.getIdTokenClaims,
      isAuthenticated = _c.isAuthenticated;

  var notIsAuthenticated = (0, ahooks_1.usePrevious)(isAuthenticated);
  var queryKey = ["Mojito ".concat(data_1.EMojitoQueries[query]), variables];
  var result = (0, react_query_1.useQuery)(queryKey, function () {
    return __awaiter(_this, void 0, void 0, function () {
      var token;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!isAuthenticated) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , getIdTokenClaims()];

          case 1:
            token = _a.sent();

            if (token) {
              exports.mojitoGqlClient.setHeader('authorization', "Bearer ".concat(token.__raw));
            }

            return [3
            /*break*/
            , 3];

          case 2:
            if (onlyAuthenticated) {
              return [2
              /*return*/
              , null];
            }

            _a.label = 3;

          case 3:
            if (Object.values(variables !== null && variables !== void 0 ? variables : {}).some(function (e) {
              return !e;
            })) {
              console.error('some of vars is undefined', variables);
              return [2
              /*return*/
              , null];
            }

            return [4
            /*yield*/
            , (0, utils_1.gqlRequest)({
              query: data_1.mojitoQueries[query],
              variables: variables,
              normalizerFn: utils_1.mojitoNormalizer,
              gqlClient: exports.mojitoGqlClient
            })];

          case 4:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  }, __assign(__assign({}, options), {
    meta: {
      authorization: isAuthenticated
    },
    enabled: !onlyAuthenticated
  }));
  (0, ahooks_1.useIsomorphicLayoutEffect)(function () {
    if (force) {
      utils_1.queryClient.removeQueries(queryKey);
    }
  }, []);
  (0, ahooks_1.useIsomorphicLayoutEffect)(function () {
    if (isAuthenticated && !notIsAuthenticated) {
      if (onlyAuthenticated && utils_1.queryClient.getQueryData(queryKey) == undefined) {
        result.refetch();
      }
    }
  }, [isAuthenticated]);

  if (result.isError) {
    console.log(result.error);
  }

  return __assign({
    loading: result.isLoading
  }, result);
}

exports.useMojito = useMojito;

function useLazyMojito(_a) {
  var query = _a.query,
      variables = _a.variables,
      options = _a.options,
      _b = _a.force,
      force = _b === void 0 ? false : _b,
      onlyAuthenticated = _a.onlyAuthenticated;
  options = __assign({
    enabled: false
  }, options);
  var result = useMojito({
    query: query,
    variables: variables,
    options: options,
    force: force,
    onlyAuthenticated: onlyAuthenticated
  });
  return [result.refetch, __assign({}, result)];
}

exports.useLazyMojito = useLazyMojito;

function useMojitoMutation(query, onlyAuthenticated) {
  var _this = this;

  if (onlyAuthenticated === void 0) {
    onlyAuthenticated = false;
  }

  var getIdTokenClaims = (0, auth0_react_1.useAuth0)().getIdTokenClaims;
  var res = (0, react_query_1.useMutation)(function (variables) {
    return __awaiter(_this, void 0, void 0, function () {
      var token;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , getIdTokenClaims()];

          case 1:
            token = _a.sent();

            if (token) {
              exports.mojitoGqlClient.setHeader('authorization', "Bearer ".concat(token.__raw));
            } else if (onlyAuthenticated) {
              return [2
              /*return*/
              , null];
            }

            if (Object.values(variables !== null && variables !== void 0 ? variables : {}).some(function (e) {
              return !e;
            })) {
              console.error('some of vars is undefined', variables);
              return [2
              /*return*/
              , null];
            }

            return [4
            /*yield*/
            , (0, utils_1.gqlRequest)({
              query: data_1.mojitoMutations[query],
              variables: variables,
              normalizerFn: utils_1.mojitoNormalizer,
              gqlClient: exports.mojitoGqlClient
            })];

          case 2:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  });
  return [res.mutateAsync, res];
}

exports.useMojitoMutation = useMojitoMutation;

function useCollectionLotsIdList(slug) {
  var _a;

  var _b = useMojito({
    query: data_1.EMojitoQueries.collectionLotsIdList,
    variables: {
      slug: slug,
      marketplaceID: general_constants_1.config.MARKETPLACE_ID
    }
  }),
      data = _b.data,
      error = _b.error,
      loading = _b.loading;

  if (error) console.error(error);
  return {
    collectionLotsIdList: (_a = data === null || data === void 0 ? void 0 : data.items) !== null && _a !== void 0 ? _a : [],
    collectionLoading: loading,
    collectionError: error
  };
}

exports.useCollectionLotsIdList = useCollectionLotsIdList;

function useMarketplaceCollectionsSlugWithItemsId() {
  var _a;

  var _b = useMojito({
    query: data_1.EMojitoQueries.marketplaceCollectionsInfoWithItemsIdAndSlug,
    variables: {
      id: general_constants_1.config.MARKETPLACE_ID
    }
  }),
      data = _b.data,
      error = _b.error,
      loading = _b.loading;

  if (error) console.error(error);
  return {
    marketplaceCollectionsSlugWithItemsId: (_a = data === null || data === void 0 ? void 0 : data.marketplace) === null || _a === void 0 ? void 0 : _a.collections,
    marketplaceCollectionsSlugWithItemsIdLoading: loading,
    marketplaceCollectionsSlugWithItemsIdError: error
  };
}

exports.useMarketplaceCollectionsSlugWithItemsId = useMarketplaceCollectionsSlugWithItemsId;

function useCollectionItemCurrentBids(id, _slug) {
  var _a;

  var slug = (0, useCollection_1.useCollection)().slug;

  var _b = useMojito({
    query: data_1.EMojitoQueries.collectionBySlugCurrentBids,
    variables: {
      slug: _slug !== null && _slug !== void 0 ? _slug : slug,
      marketplaceID: general_constants_1.config.MARKETPLACE_ID
    }
  }),
      data = _b.data,
      error = _b.error,
      loading = _b.loading,
      refetch = _b.refetch;

  if (error) console.error(error);
  return {
    allCurrentBids: data === null || data === void 0 ? void 0 : data.items,
    currentBids: id ? (_a = data === null || data === void 0 ? void 0 : data.items) === null || _a === void 0 ? void 0 : _a.find(function (item) {
      return item.id == id;
    }) : undefined,
    currentBidsLoading: loading,
    currentBidsError: error,
    currentBidsRefetch: refetch
  };
}

exports.useCollectionItemCurrentBids = useCollectionItemCurrentBids;

function useCollectionItemBidsList(id, _slug) {
  var _a;

  var slug = (0, useCollection_1.useCollection)().slug;

  var _b = useMojito({
    query: data_1.EMojitoQueries.collectionItemByIdBidsList,
    variables: {
      id: id,
      slug: _slug !== null && _slug !== void 0 ? _slug : slug
    }
  }),
      data = _b.data,
      error = _b.error,
      loading = _b.loading,
      refetch = _b.refetch;

  if (error) console.error(error);
  return {
    bids: (_a = data === null || data === void 0 ? void 0 : data.details) === null || _a === void 0 ? void 0 : _a.bids,
    bidsLoading: loading,
    bidsError: error,
    bidsRefetch: refetch
  };
}

exports.useCollectionItemBidsList = useCollectionItemBidsList;

function useCollectionItemRemainingCount(id, _slug) {
  var _a;

  var slug = (0, useCollection_1.useCollection)().slug;

  var _b = useMojito({
    query: data_1.EMojitoQueries.collectionItemByIdRemainingCount,
    variables: {
      id: id,
      slug: _slug !== null && _slug !== void 0 ? _slug : slug
    },
    onlyAuthenticated: true
  }),
      data = _b.data,
      error = _b.error,
      loading = _b.loading,
      refetch = _b.refetch;

  if (error) console.error(error);
  return {
    remainingCount: (_a = data === null || data === void 0 ? void 0 : data.details) === null || _a === void 0 ? void 0 : _a.remainingCount,
    remainingCountLoading: loading,
    remainingCountError: error,
    remainingCountRefetch: refetch
  };
}

exports.useCollectionItemRemainingCount = useCollectionItemRemainingCount;