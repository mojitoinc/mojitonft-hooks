"use strict";

var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FAVORITE_ITEMS_FIELD = exports.COLLECTION_ITEM_FIELD = exports.COLLECTION_ITEM_BUY_NOW_DETAILS_FIELD = exports.COLLECTION_ITEM_AUCTION_LOT_DETAILS_FIELD = exports.COLLECTION_ITEM_AUCTION_LOT_MY_BID_FIELD = exports.COLLECTION_ITEM_AUCTION_LOT_CURRENT_BID_FIELD = exports.COLLECTION_ITEM_AUCTION_LOT_BIDS_LIST_FIELD = void 0;

var graphql_request_1 = require("graphql-request");

exports.COLLECTION_ITEM_AUCTION_LOT_BIDS_LIST_FIELD = (0, graphql_request_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment CollectionItemAuctionLotBidsList on MarketplaceAuctionBid {\n    id\n    amount\n    createdAt\n    maximumBid\n    marketplaceAuctionLotId\n    marketplaceUser {\n      id\n      username\n      avatar\n    }\n  }\n"], ["\n  fragment CollectionItemAuctionLotBidsList on MarketplaceAuctionBid {\n    id\n    amount\n    createdAt\n    maximumBid\n    marketplaceAuctionLotId\n    marketplaceUser {\n      id\n      username\n      avatar\n    }\n  }\n"])));
exports.COLLECTION_ITEM_AUCTION_LOT_CURRENT_BID_FIELD = (0, graphql_request_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  fragment CollectionItemAuctionLotCurrentBid on MarketplaceAuctionBid {\n    id\n    amount\n    createdAt\n    maximumBid\n    nextBidIncrement\n    marketplaceAuctionLotId\n    marketplaceUser {\n      id\n      username\n      avatar\n    }\n  }\n"], ["\n  fragment CollectionItemAuctionLotCurrentBid on MarketplaceAuctionBid {\n    id\n    amount\n    createdAt\n    maximumBid\n    nextBidIncrement\n    marketplaceAuctionLotId\n    marketplaceUser {\n      id\n      username\n      avatar\n    }\n  }\n"])));
exports.COLLECTION_ITEM_AUCTION_LOT_MY_BID_FIELD = (0, graphql_request_1.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fragment CollectionItemAuctionLotMyBid on MarketplaceAuctionBid {\n    id\n    amount\n    createdAt\n    currentBid\n    maximumBid\n    nextBidIncrement\n    marketplaceAuctionLotId\n  }\n"], ["\n  fragment CollectionItemAuctionLotMyBid on MarketplaceAuctionBid {\n    id\n    amount\n    createdAt\n    currentBid\n    maximumBid\n    nextBidIncrement\n    marketplaceAuctionLotId\n  }\n"])));
exports.COLLECTION_ITEM_AUCTION_LOT_DETAILS_FIELD = (0, graphql_request_1.gql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  fragment CollectionItemAuctionLotDetailsFields on MarketplaceAuctionLot {\n    id\n    status\n    endDate\n    startDate\n    lotNumber\n    startingBid\n    marketplaceCollectionItemId\n    feeStructure {\n      buyersPremiumRate {\n        from\n        to\n        rate\n      }\n      overheadPremiumRate {\n        from\n        to\n        rate\n      }\n    }\n  }\n"], ["\n  fragment CollectionItemAuctionLotDetailsFields on MarketplaceAuctionLot {\n    id\n    status\n    endDate\n    startDate\n    lotNumber\n    startingBid\n    marketplaceCollectionItemId\n    feeStructure {\n      buyersPremiumRate {\n        from\n        to\n        rate\n      }\n      overheadPremiumRate {\n        from\n        to\n        rate\n      }\n    }\n  }\n"])));
exports.COLLECTION_ITEM_BUY_NOW_DETAILS_FIELD = (0, graphql_request_1.gql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  fragment CollectionItemBuyNowDetailsFields on MarketplaceBuyNowOutput {\n    id\n    unitPrice\n    totalUnits\n    totalAvailableUnits\n    startDate\n    endDate\n    sortNumber\n  }\n"], ["\n  fragment CollectionItemBuyNowDetailsFields on MarketplaceBuyNowOutput {\n    id\n    unitPrice\n    totalUnits\n    totalAvailableUnits\n    startDate\n    endDate\n    sortNumber\n  }\n"])));
exports.COLLECTION_ITEM_FIELD = (0, graphql_request_1.gql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  ", "\n\n  fragment CollectionItemFields on MarketplaceCollectionItem {\n    name\n    id\n    collectionId\n    marketplaceTokenId\n    saleType\n    slug\n    details {\n      __typename\n      ... on MarketplaceBuyNowOutput {\n        ...CollectionItemBuyNowDetailsFields\n      }\n      ... on MarketplaceAuctionLot {\n        ...CollectionItemAuctionLotDetailsFields\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n\n  fragment CollectionItemFields on MarketplaceCollectionItem {\n    name\n    id\n    collectionId\n    marketplaceTokenId\n    saleType\n    slug\n    details {\n      __typename\n      ... on MarketplaceBuyNowOutput {\n        ...CollectionItemBuyNowDetailsFields\n      }\n      ... on MarketplaceAuctionLot {\n        ...CollectionItemAuctionLotDetailsFields\n      }\n    }\n  }\n"])), exports.COLLECTION_ITEM_BUY_NOW_DETAILS_FIELD, exports.COLLECTION_ITEM_AUCTION_LOT_DETAILS_FIELD);
exports.FAVORITE_ITEMS_FIELD = (0, graphql_request_1.gql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  fragment FavoriteItemsFields on MarketplaceCollectionItem {\n    id\n    marketplaceTokenId\n    collectionId\n    saleType\n    name\n    slug\n    details {\n      __typename\n      ... on MarketplaceBuyNowOutput {\n        id\n      }\n      ... on MarketplaceAuctionLot {\n        id\n      }\n    }\n  }\n"], ["\n  fragment FavoriteItemsFields on MarketplaceCollectionItem {\n    id\n    marketplaceTokenId\n    collectionId\n    saleType\n    name\n    slug\n    details {\n      __typename\n      ... on MarketplaceBuyNowOutput {\n        id\n      }\n      ... on MarketplaceAuctionLot {\n        id\n      }\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;