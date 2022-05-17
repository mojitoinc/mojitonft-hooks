import { IMojitoCollectionItem } from '../domain/interfaces/mojito.interface';
export declare const useCheckCollectionItemsSaleStatus: (items: IMojitoCollectionItem<any>[] | undefined) => {
    haveActiveAuctionItems: boolean;
    haveActiveBuyNowItems: boolean;
};
