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

var _a;

import { gql } from 'graphql-request';
export var EMojitoMutations;

(function (EMojitoMutations) {
  EMojitoMutations[EMojitoMutations["saveCollectionItemToFavorites"] = 0] = "saveCollectionItemToFavorites";
  EMojitoMutations[EMojitoMutations["removeCollectionItemFromFavorites"] = 1] = "removeCollectionItemFromFavorites";
  EMojitoMutations[EMojitoMutations["createBid"] = 2] = "createBid";
  EMojitoMutations[EMojitoMutations["updateUserOrgSettings"] = 3] = "updateUserOrgSettings";
  EMojitoMutations[EMojitoMutations["transferToken"] = 4] = "transferToken";
})(EMojitoMutations || (EMojitoMutations = {}));

export var mojitoMutations = (_a = {}, _a[EMojitoMutations.saveCollectionItemToFavorites] = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation AddCollectionItemToUserFavorites($collectionItemId: UUID1!) {\n      addCollectionItemToUserFavorites(collectionItemId: $collectionItemId)\n    }\n  "], ["\n    mutation AddCollectionItemToUserFavorites($collectionItemId: UUID1!) {\n      addCollectionItemToUserFavorites(collectionItemId: $collectionItemId)\n    }\n  "]))), _a[EMojitoMutations.removeCollectionItemFromFavorites] = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    mutation RemoveCollectionItemFromUserFavorites($collectionItemId: UUID1!) {\n      deleteCollectionItemFromUserFavorites(collectionItemId: $collectionItemId)\n    }\n  "], ["\n    mutation RemoveCollectionItemFromUserFavorites($collectionItemId: UUID1!) {\n      deleteCollectionItemFromUserFavorites(collectionItemId: $collectionItemId)\n    }\n  "]))), _a[EMojitoMutations.createBid] = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    mutation CreateMarketplaceAuctionBid($marketplaceAuctionLotId: UUID!, $amount: Float!) {\n      createMarketplaceAuctionBid(\n        marketplaceAuctionBid: {\n          marketplaceAuctionLotId: $marketplaceAuctionLotId\n          amount: $amount\n        }\n      ) {\n        id\n        amount\n        marketplaceAuctionLotId\n        userId\n      }\n    }\n  "], ["\n    mutation CreateMarketplaceAuctionBid($marketplaceAuctionLotId: UUID!, $amount: Float!) {\n      createMarketplaceAuctionBid(\n        marketplaceAuctionBid: {\n          marketplaceAuctionLotId: $marketplaceAuctionLotId\n          amount: $amount\n        }\n      ) {\n        id\n        amount\n        marketplaceAuctionLotId\n        userId\n      }\n    }\n  "]))), _a[EMojitoMutations.updateUserOrgSettings] = gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    mutation ($userOrgId: String!, $username: String, $avatar: String, $settingsJson: String) {\n      updateUserOrgSettings(\n        params: {\n          userOrgId: $userOrgId\n          username: $username\n          avatar: $avatar\n          settingsJson: $settingsJson\n        }\n      ) {\n        id\n      }\n    }\n  "], ["\n    mutation ($userOrgId: String!, $username: String, $avatar: String, $settingsJson: String) {\n      updateUserOrgSettings(\n        params: {\n          userOrgId: $userOrgId\n          username: $username\n          avatar: $avatar\n          settingsJson: $settingsJson\n        }\n      ) {\n        id\n      }\n    }\n  "]))), _a[EMojitoMutations.transferToken] = gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    mutation (\n      $walletId: UUID1!\n      $tokenId: Int!\n      $contractAddress: String!\n      $transferTo: String!\n      $tokenType: String!\n    ) {\n      transferToken(\n        walletId: $walletId\n        tokenOnChainId: $tokenId\n        contractAddress: $contractAddress\n        transferTo: $transferTo\n        tokenType: $tokenType\n      )\n    }\n  "], ["\n    mutation (\n      $walletId: UUID1!\n      $tokenId: Int!\n      $contractAddress: String!\n      $transferTo: String!\n      $tokenType: String!\n    ) {\n      transferToken(\n        walletId: $walletId\n        tokenOnChainId: $tokenId\n        contractAddress: $contractAddress\n        transferTo: $transferTo\n        tokenType: $tokenType\n      )\n    }\n  "]))), _a);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;