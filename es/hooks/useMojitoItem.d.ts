import { UseQueryOptions } from 'react-query';
import { IMojitoCollectionItem, IMojitoCollectionItemAuctionLot, IMojitoCollectionItemBuyNowLot } from '../domain/interfaces';
export declare function useMojitoItem<TItem = IMojitoCollectionItemAuctionLot | IMojitoCollectionItemBuyNowLot>(props?: {
    url?: string;
    slug?: string;
    id?: string;
    options?: UseQueryOptions<any>;
}): {
    slug: string;
    isLoading: boolean;
    mojitoItem: IMojitoCollectionItem<TItem extends IMojitoCollectionItemAuctionLot ? IMojitoCollectionItemAuctionLot : TItem extends IMojitoCollectionItemBuyNowLot ? IMojitoCollectionItemBuyNowLot : IMojitoCollectionItemAuctionLot | IMojitoCollectionItemBuyNowLot> | undefined;
};
