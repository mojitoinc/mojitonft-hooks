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

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMojitoWallets = exports.useServerTime = exports.useLazyMojitoOneLot = exports.useActiveBids = exports.useInvoices = exports.useFavorites = exports.useOrganization = exports.useProfile = void 0;

var Sentry = __importStar(require("@sentry/react"));

var react_1 = require("react");

var mojito_query_1 = require("../data/graph_ql/mojito.query");

var general_constants_1 = require("../domain/general.constants");

var useMojito_1 = require("./useMojito");

function useProfile(props) {
  var _a, _b;

  var result = (0, useMojito_1.useMojito)({
    query: mojito_query_1.EMojitoQueries.profile,
    force: props === null || props === void 0 ? void 0 : props.force,
    onlyAuthenticated: true
  });
  var profile = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.me;
  var organization = (_b = profile === null || profile === void 0 ? void 0 : profile.userOrgs) === null || _b === void 0 ? void 0 : _b[0];
  (0, react_1.useEffect)(function () {
    if (!profile || !organization) return;
    Sentry.setUser({
      id: profile.id
    });
    Sentry.setTag('profileID', profile.id);
    Sentry.setTag('organizationID', organization.id);
  }, [profile, organization]);
  return __assign({
    profile: profile
  }, result);
}

exports.useProfile = useProfile;

function useOrganization(options) {
  var _a, _b;

  if (options === void 0) {
    options = {};
  }

  var result = (0, useMojito_1.useMojito)({
    query: mojito_query_1.EMojitoQueries.organization,
    options: options,
    onlyAuthenticated: true
  });
  var profile = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.me;
  var organization = (_b = profile === null || profile === void 0 ? void 0 : profile.userOrgs) === null || _b === void 0 ? void 0 : _b[0];
  (0, react_1.useEffect)(function () {
    if (!profile || !organization) return;
    Sentry.setUser({
      id: profile.id
    });
    Sentry.setTag('profileID', profile.id);
    Sentry.setTag('organizationID', organization.id);
  }, [profile, organization]);
  return __assign({
    organization: organization
  }, result);
}

exports.useOrganization = useOrganization;

function useFavorites() {
  var _a, _b;

  var result = (0, useMojito_1.useMojito)({
    query: mojito_query_1.EMojitoQueries.userFavorites,
    onlyAuthenticated: true
  });
  return __assign({
    favorites: (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.favoriteItems
  }, result);
}

exports.useFavorites = useFavorites;

function useInvoices() {
  var _a;

  var result = (0, useMojito_1.useMojito)({
    query: mojito_query_1.EMojitoQueries.invoices,
    onlyAuthenticated: true
  });
  return __assign({
    invoices: (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.getMyInvoices
  }, result);
}

exports.useInvoices = useInvoices;

function useActiveBids() {
  var _a, _b;

  var result = (0, useMojito_1.useMojito)({
    query: mojito_query_1.EMojitoQueries.userActiveBids,
    variables: {
      organizationID: general_constants_1.config.ORGANIZATION_ID
    },
    onlyAuthenticated: true
  });
  return __assign({
    activeBids: (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.activeBids
  }, result);
}

exports.useActiveBids = useActiveBids;

function useLazyMojitoOneLot(variables) {
  var _a, _b;

  var _c = __read((0, useMojito_1.useLazyMojito)({
    query: mojito_query_1.EMojitoQueries.oneLot,
    variables: variables
  }), 2),
      getData = _c[0],
      result = _c[1];

  return [getData, __assign({
    mojitoItemDetails: (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.getMarketplaceAuctionLot) !== null && _b !== void 0 ? _b : undefined
  }, result)];
}

exports.useLazyMojitoOneLot = useLazyMojitoOneLot;

function useServerTime() {
  var _a;

  var result = (0, useMojito_1.useMojito)({
    query: mojito_query_1.EMojitoQueries.serverTime
  });
  return __assign({
    serverTime: (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.serverTime
  }, result);
}

exports.useServerTime = useServerTime;

function useMojitoWallets() {
  var _a, _b;

  var result = (0, useMojito_1.useMojito)({
    query: mojito_query_1.EMojitoQueries.userWallets,
    onlyAuthenticated: true
  });
  return __assign({
    wallets: (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.wallets
  }, result);
}

exports.useMojitoWallets = useMojitoWallets;