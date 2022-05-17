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

import * as Sentry from '@sentry/react';
import { useEffect } from 'react';
import { EMojitoQueries } from '../data/graph_ql/mojito.query';
import { config } from '../domain/general.constants';
import { useLazyMojito, useMojito } from './useMojito';
export function useProfile(props) {
  var _a, _b;

  var result = useMojito({
    query: EMojitoQueries.profile,
    force: props === null || props === void 0 ? void 0 : props.force,
    onlyAuthenticated: true
  });
  var profile = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.me;
  var organization = (_b = profile === null || profile === void 0 ? void 0 : profile.userOrgs) === null || _b === void 0 ? void 0 : _b[0];
  useEffect(function () {
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
export function useOrganization(options) {
  var _a, _b;

  if (options === void 0) {
    options = {};
  }

  var result = useMojito({
    query: EMojitoQueries.organization,
    options: options,
    onlyAuthenticated: true
  });
  var profile = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.me;
  var organization = (_b = profile === null || profile === void 0 ? void 0 : profile.userOrgs) === null || _b === void 0 ? void 0 : _b[0];
  useEffect(function () {
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
export function useFavorites() {
  var _a, _b;

  var result = useMojito({
    query: EMojitoQueries.userFavorites,
    onlyAuthenticated: true
  });
  return __assign({
    favorites: (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.favoriteItems
  }, result);
}
export function useInvoices() {
  var _a;

  var result = useMojito({
    query: EMojitoQueries.invoices,
    onlyAuthenticated: true
  });
  return __assign({
    invoices: (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.getMyInvoices
  }, result);
}
export function useActiveBids() {
  var _a, _b;

  var result = useMojito({
    query: EMojitoQueries.userActiveBids,
    variables: {
      organizationID: config.ORGANIZATION_ID
    },
    onlyAuthenticated: true
  });
  return __assign({
    activeBids: (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.activeBids
  }, result);
}
export function useLazyMojitoOneLot(variables) {
  var _a, _b;

  var _c = __read(useLazyMojito({
    query: EMojitoQueries.oneLot,
    variables: variables
  }), 2),
      getData = _c[0],
      result = _c[1];

  return [getData, __assign({
    mojitoItemDetails: (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.getMarketplaceAuctionLot) !== null && _b !== void 0 ? _b : undefined
  }, result)];
}
export function useServerTime() {
  var _a;

  var result = useMojito({
    query: EMojitoQueries.serverTime
  });
  return __assign({
    serverTime: (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.serverTime
  }, result);
}
export function useMojitoWallets() {
  var _a, _b;

  var result = useMojito({
    query: EMojitoQueries.userWallets,
    onlyAuthenticated: true
  });
  return __assign({
    wallets: (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.wallets
  }, result);
}