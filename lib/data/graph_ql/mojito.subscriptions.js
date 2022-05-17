"use strict";

var _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mojitoSubscriptions = exports.EMojitoSubscriptions = void 0;

var collection_fragment_1 = require("./collection.fragment");

var EMojitoSubscriptions;

(function (EMojitoSubscriptions) {
  EMojitoSubscriptions[EMojitoSubscriptions["collectionItemBids"] = 0] = "collectionItemBids";
  EMojitoSubscriptions[EMojitoSubscriptions["getMarketplaceAuctionLot"] = 1] = "getMarketplaceAuctionLot";
  EMojitoSubscriptions[EMojitoSubscriptions["marketplaceCollectionLotsUpdates"] = 2] = "marketplaceCollectionLotsUpdates";
})(EMojitoSubscriptions = exports.EMojitoSubscriptions || (exports.EMojitoSubscriptions = {}));

exports.mojitoSubscriptions = (_a = {}, _a[EMojitoSubscriptions.collectionItemBids] = "\n  ".concat(collection_fragment_1.COLLECTION_ITEM_AUCTION_LOT_BIDS_LIST_FIELD, "\n\n    subscription bidFeed($marketplaceAuctionLotId: UUID1!) {\n      getMarketplaceAuctionLot(marketplaceAuctionLotId: $marketplaceAuctionLotId) {\n        id\n        endDate\n        startDate\n        bids {\n          ...CollectionItemAuctionLotBidsList\n        }\n      }\n    }\n  "), _a[EMojitoSubscriptions.getMarketplaceAuctionLot] = "\n  ".concat(collection_fragment_1.COLLECTION_ITEM_AUCTION_LOT_CURRENT_BID_FIELD, "\n  ").concat(collection_fragment_1.COLLECTION_ITEM_AUCTION_LOT_MY_BID_FIELD, "\n\n    subscription getMarketplaceAuctionLot($marketplaceAuctionLotId: UUID1!) {\n      getMarketplaceAuctionLot(marketplaceAuctionLotId: $marketplaceAuctionLotId) {\n        id\n        endDate\n        startDate\n        currentBid {\n          ...CollectionItemAuctionLotCurrentBid\n        }\n        myBid {\n         ...CollectionItemAuctionLotMyBid\n        }\n      }\n    }\n  "), _a[EMojitoSubscriptions.marketplaceCollectionLotsUpdates] = "\n  ".concat(collection_fragment_1.COLLECTION_ITEM_AUCTION_LOT_CURRENT_BID_FIELD, "\n  ").concat(collection_fragment_1.COLLECTION_ITEM_AUCTION_LOT_MY_BID_FIELD, "\n\n    subscription marketplaceCollectionLotsUpdates($collectionId: UUID1!) {\n      marketplaceCollectionLotsUpdates(collectionId: $collectionId) {\n        id\n        endDate\n        startDate\n        currentBid {\n          ...CollectionItemAuctionLotCurrentBid\n        }\n        myBid {\n          ...CollectionItemAuctionLotMyBid\n        }\n      }\n    }\n  "), _a);