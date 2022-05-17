import { UseQueryResult } from 'react-query';
export declare type IUseQueryResult = UseQueryResult & {
    loading: UseQueryResult['isLoading'];
    data: any;
};
export declare enum EMojitoQueries {
    serverTime = 0,
    checkUsername = 1,
    userFavorites = 2,
    userActiveBids = 3,
    userWallets = 4,
    profile = 5,
    organization = 6,
    oneLot = 7,
    invoices = 8,
    collectionBySlug = 9,
    collectionLotsIdList = 10,
    marketplaceCollectionsInfoWithItemsIdAndSlug = 11,
    collectionBySlugCurrentBids = 12,
    collectionItemByIdBidsList = 13,
    collectionItemByIdRemainingCount = 14
}
export declare const mojitoQueries: {
    5: string;
    6: string;
    4: string;
    8: string;
    3: string;
    2: string;
    1: string;
    9: string;
    12: string;
    14: string;
    13: string;
    10: string;
    7: string;
    11: string;
    0: string;
};
