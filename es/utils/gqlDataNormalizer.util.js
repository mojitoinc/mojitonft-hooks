import moment from 'moment';
import { EContentfulQueries, EMojitoQueries } from '../data';
import { config } from '../domain/general.constants';
import { queryClient } from './gqlRequest.util';

var extendCollection = function extendCollection(collection) {
  var _a, _b, _c, _d, _e, _f;

  var contentfulData = (_c = (_b = (_a = queryClient.getQueryData(["Contentful ".concat(EContentfulQueries[EContentfulQueries.auctionBySlug]), {
    slug: collection.slug
  }])) === null || _a === void 0 ? void 0 : _a.auctionCollection) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c[0];

  if (contentfulData) {
    collection.contentfulData = contentfulData;
  }

  var auctionStartUnix = moment((_d = collection.startDate) !== null && _d !== void 0 ? _d : null).unix();
  var auctionEndUnix = moment((_e = collection.endDate) !== null && _e !== void 0 ? _e : null).unix();
  var nowUnix = moment().unix();
  Object.assign(collection, {
    viewStatus: {
      isPreSale: nowUnix < auctionStartUnix,
      isDuringSale: nowUnix > auctionStartUnix && nowUnix < auctionEndUnix,
      isPostSale: nowUnix > auctionEndUnix
    }
  });

  if ((_f = collection === null || collection === void 0 ? void 0 : collection.items) === null || _f === void 0 ? void 0 : _f.length) {
    collection.items = extendCollectionItems(collection.items, collection.slug);
    collection.hasMultipleLots = collection.items.length > 1;
  }

  return collection;
};

var extendCollectionSingleItem = function extendCollectionSingleItem(item, slug, shortLots) {
  var _a, _b, _c, _d, _e;

  var _item = item;
  var __itemAsBuyNow = item;

  if (((_a = __itemAsBuyNow === null || __itemAsBuyNow === void 0 ? void 0 : __itemAsBuyNow.details) === null || _a === void 0 ? void 0 : _a.remainingCount) < 0) {
    __itemAsBuyNow.details.remainingCount = 0;
  }

  if (!((_b = _item === null || _item === void 0 ? void 0 : _item.details) === null || _b === void 0 ? void 0 : _b.bids) && !((_c = _item === null || _item === void 0 ? void 0 : _item.details) === null || _c === void 0 ? void 0 : _c.currentBid)) {
    var lot = queryClient.getQueryData(["Contentful ".concat(EContentfulQueries[EContentfulQueries.fullLot]), {
      mojitoId: item.id
    }]);
    item.contentfulData = (_e = (_d = lot === null || lot === void 0 ? void 0 : lot[item.id]) !== null && _d !== void 0 ? _d : shortLots === null || shortLots === void 0 ? void 0 : shortLots[item.id]) !== null && _e !== void 0 ? _e : {
      lotId: -1,
      title: 'NA',
      subtitle: 'NA',
      mojitoId: 'NA',
      slug: 'NA'
    };
  }

  if (item === null || item === void 0 ? void 0 : item.details) {
    item.details = extendItemDetails(item.details, slug);
  }

  return item;
};

var extendCollectionItems = function extendCollectionItems(collectionItems, slug) {
  var lots = queryClient.getQueryData(["Contentful ".concat(EContentfulQueries[EContentfulQueries.shortLots]), {
    slug: slug
  }]);
  return collectionItems.map(function (item) {
    return extendCollectionSingleItem(item, slug, lots);
  });
};

var extendItemDetails = function extendItemDetails(details, slug) {
  var _a, _b, _c, _d, _e, _f, _g, _h;

  var profile = (_a = queryClient.getQueryData(["Mojito ".concat(EMojitoQueries[EMojitoQueries.profile]), null])) === null || _a === void 0 ? void 0 : _a.me;
  var item = (_c = (_b = queryClient.getQueryData(["Mojito ".concat(EMojitoQueries[EMojitoQueries.collectionBySlugCurrentBids]), {
    slug: slug,
    marketplaceID: config.MARKETPLACE_ID
  }])) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.find(function (e) {
    return e.details.id === details.id;
  });
  var oldDetails = item === null || item === void 0 ? void 0 : item.details;

  if (details.startDate && details.endDate) {
    var auctionStartUnix = moment((_d = details.startDate) !== null && _d !== void 0 ? _d : null).unix();
    var auctionEndUnix = moment((_e = details.endDate) !== null && _e !== void 0 ? _e : null).unix();
    var nowUnix = moment().unix();
    Object.assign(details, {
      endTimestamp: auctionEndUnix - nowUnix,
      saleView: {
        isPreSale: nowUnix <= auctionStartUnix,
        isDuringSale: nowUnix > auctionStartUnix && nowUnix < auctionEndUnix,
        isPostSale: nowUnix >= auctionEndUnix
      }
    });
  } // @ts-ignore


  if (details === null || details === void 0 ? void 0 : details.bids) {
    var _bids = details.bids;
    _bids = _bids === null || _bids === void 0 ? void 0 : _bids.sort(function (a, b) {
      return a.amount > b.amount ? -1 : 1;
    });

    if (profile) {
      var _youFirstBidIndex_1 = -1;

      _bids = _bids.map(function (bid, idx) {
        bid.isMine = profile.id === bid.marketplaceUser.id;

        if (_youFirstBidIndex_1 == -1 && bid.isMine) {
          _youFirstBidIndex_1 = idx;
        }

        return bid;
      });

      if (_youFirstBidIndex_1 == 0) {
        _bids[0].isHold = true;
      } else if (_youFirstBidIndex_1 > 0) {
        _bids[_youFirstBidIndex_1].isOutbid = true;

        if (_bids[0].amount == _bids[_youFirstBidIndex_1].amount) {
          _bids[_youFirstBidIndex_1].isInfo = true;
        }
      }
    }

    Object.assign(details, {
      bids: _bids
    });
  }

  if (details.currentBid) {
    var _userBid = details.myBid;
    var _currentBid = details.currentBid;

    var _userHoldBid = (_userBid === null || _userBid === void 0 ? void 0 : _userBid.id) == (_currentBid === null || _currentBid === void 0 ? void 0 : _currentBid.id);

    if ((_f = details.saleView) === null || _f === void 0 ? void 0 : _f.isDuringSale) {
      if (_userHoldBid) details.currentBid.isHold = true;else if (_userBid) details.currentBid.isOutbid = true;else details.currentBid.isCurrent = true;
    } else if ((_g = details.saleView) === null || _g === void 0 ? void 0 : _g.isPostSale) {
      if (_userBid && _userHoldBid) details.currentBid.isWin = true;else if (_userBid) details.currentBid.isLost = true;else details.currentBid.isSold = true;
    }
  } else if (oldDetails === null || oldDetails === void 0 ? void 0 : oldDetails.currentBid) {
    details.currentBid = oldDetails === null || oldDetails === void 0 ? void 0 : oldDetails.currentBid;
  } else if ((details === null || details === void 0 ? void 0 : details.currentBid) === null) {
    details.currentBid = {
      amount: (_h = details.startingBid) !== null && _h !== void 0 ? _h : 50,
      isStart: true,
      marketplaceAuctionLotId: details.id
    };
  } else {
    details.currentBid = null;
  }

  Object.assign(details, {
    currentBid: details.currentBid
  });

  if (!(details === null || details === void 0 ? void 0 : details.myBid) && (oldDetails === null || oldDetails === void 0 ? void 0 : oldDetails.myBid)) {
    Object.assign(details, {
      myBid: oldDetails.myBid
    });
  }

  return details;
};

export function mojitoNormalizer(response, variables, key) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;

  if (!response) return null;
  var _data = response;

  if (_data.serverTime) {
    var serverTimeOffset_1 = new Date(_data.serverTime).getTime() - Date.now();

    moment.now = function () {
      return serverTimeOffset_1 + Date.now();
    };
  }

  if ((_b = (_a = _data === null || _data === void 0 ? void 0 : _data.me) === null || _a === void 0 ? void 0 : _a.userOrgs) === null || _b === void 0 ? void 0 : _b[0]) {
    var _organization = _data.me.userOrgs[0];
    var role = _organization.role;
    var isBasic = role === 'Basic';
    var isMissingInfo = role === 'MissingInformation';
    var isEndUser = role === 'EndUser';
    var isTransactionalNoID = role === 'TransactionalNoID';
    var isTransactionalWithID = role === 'TransactionalWithID';
    var isNotAllowedToBid = role === 'NotAllowedToBid';
    var isCoreUnavailable = role === 'CoreUnavailable';
    var isBidAuthUnavailable = role === 'BidAuthUnavailable';
    var completeYourProfile = isBasic || isMissingInfo || isEndUser;
    var uploadID = isTransactionalNoID;
    var contactUs = isNotAllowedToBid || isCoreUnavailable || isBidAuthUnavailable; // console.log(_organization.settings);

    Object.assign(_organization, {
      notifications: {
        isTransactionalWithID: isTransactionalWithID,
        completeYourProfile: completeYourProfile,
        uploadID: uploadID,
        contactUs: contactUs
      },
      hasNotifications: !!(completeYourProfile || uploadID || contactUs),
      settings: _organization.settings ? JSON.parse(_organization.settings) : {
        hasCompletedOnboarding: false,
        notifications: {
          bidOnSold: false,
          savedBidOn: false,
          savedSold: false
        },
        privacy: {
          hideActivity: false,
          showCollection: false,
          showSaved: false
        }
      }
    });
    _data.me.userOrgs[0] = _organization;
  }

  if (_data === null || _data === void 0 ? void 0 : _data.getMarketplaceAuctionLot) {
    _data.getMarketplaceAuctionLot = extendItemDetails(_data.getMarketplaceAuctionLot, variables === null || variables === void 0 ? void 0 : variables.slug);
  }

  if ((_c = _data === null || _data === void 0 ? void 0 : _data.collection) === null || _c === void 0 ? void 0 : _c.items) {
    _data.collection = extendCollection(_data.collection);
  }

  if ((_d = _data === null || _data === void 0 ? void 0 : _data.collectionBySlug) === null || _d === void 0 ? void 0 : _d.items) {
    Object.assign(_data, extendCollection(_data.collectionBySlug));
    delete _data.collectionBySlug;
  }

  if (_data === null || _data === void 0 ? void 0 : _data.collectionItemById) {
    if (variables === null || variables === void 0 ? void 0 : variables.slug) {
      _data.collectionItemById = extendCollectionSingleItem(_data.collectionItemById, variables.slug);
    }

    Object.assign(_data, _data.collectionItemById);
  } // TODO replace the mojito marketplace request to multiple collectionBySlug requests


  if ((_e = _data === null || _data === void 0 ? void 0 : _data.marketplace) === null || _e === void 0 ? void 0 : _e.collections) {
    _data.marketplace.collections = (_f = _data === null || _data === void 0 ? void 0 : _data.marketplace) === null || _f === void 0 ? void 0 : _f.collections.map(function (collection) {
      return extendCollection(collection);
    });
  }

  if ((_g = _data === null || _data === void 0 ? void 0 : _data.me) === null || _g === void 0 ? void 0 : _g.wallets) {
    var _wallets = (_j = (_h = _data === null || _data === void 0 ? void 0 : _data.me) === null || _h === void 0 ? void 0 : _h.wallets) === null || _j === void 0 ? void 0 : _j.map(function (wallet) {
      var _a;

      wallet.tokens = (_a = wallet.tokens) === null || _a === void 0 ? void 0 : _a.map(function (token) {
        return Object.assign(token, {
          walletId: wallet.id
        });
      });
      return wallet;
    });

    _data.me.wallets = _wallets;
  }

  if (_data === null || _data === void 0 ? void 0 : _data.getMyInvoices) {
    var lots_1 = queryClient.getQueryData(["Contentful ".concat(EContentfulQueries[EContentfulQueries.shortLots]), {
      slug: variables === null || variables === void 0 ? void 0 : variables.slug
    }]);
    _data.getMyInvoices = _data === null || _data === void 0 ? void 0 : _data.getMyInvoices.map(function (invoice) {
      var lot = lots_1 === null || lots_1 === void 0 ? void 0 : lots_1[invoice.collectionItemId];

      if (lot) {
        invoice.contentfulData = lot;
      }

      return invoice;
    });
  }

  return _data;
}
export function contentfulNormalizer(response, variables, key) {
  var _a, _b;

  if (!response) return null;
  var _data = response;

  if ((_a = _data === null || _data === void 0 ? void 0 : _data.lotCollection) === null || _a === void 0 ? void 0 : _a.items) {
    var _items = (_b = _data === null || _data === void 0 ? void 0 : _data.lotCollection) === null || _b === void 0 ? void 0 : _b.items;

    return _items.reduce(function (acc, item) {
      var _a;

      return Object.assign(acc, (_a = {}, _a[item.mojitoId] = item, _a));
    }, {});
  }

  return response;
}