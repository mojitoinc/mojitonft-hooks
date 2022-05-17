import { UseQueryOptions } from 'react-query';
import { IMojitoCollectionItem, IMojitoCollectionItemAuctionLot, IMojitoCollectionItemBuyNowLot, IMojitoCollectionItemDetailsBid, IMojitoInvoice, IMojitoProfile, IMojitoProfileCustomOrgs, IMojitoProfileUserOrg, IMojitoWallet } from '../domain/interfaces';
import { useMojito } from './useMojito';
export declare function useProfile(props?: {
    force?: boolean;
}): {
    profile: IMojitoProfile;
} & ReturnType<typeof useMojito>;
export declare function useOrganization(options?: UseQueryOptions<any>): {
    organization: (IMojitoProfileUserOrg & IMojitoProfileCustomOrgs) | null;
} & ReturnType<typeof useMojito>;
export declare function useFavorites(): {
    favorites: (IMojitoCollectionItem<IMojitoCollectionItemAuctionLot> | IMojitoCollectionItem<IMojitoCollectionItemBuyNowLot>)[] | null;
} & ReturnType<typeof useMojito>;
export declare function useInvoices(): {
    invoices: IMojitoInvoice[];
} & ReturnType<typeof useMojito>;
export declare function useActiveBids(): {
    activeBids: IMojitoCollectionItemDetailsBid[] | null;
} & ReturnType<typeof useMojito>;
export declare function useLazyMojitoOneLot(variables: {
    marketplaceAuctionLotId: string | undefined;
}): [
    () => void,
    {
        mojitoItemDetails?: IMojitoCollectionItemAuctionLot;
    } & ReturnType<typeof useMojito>
];
export declare function useServerTime(): {
    serverTime: Date;
} & ReturnType<typeof useMojito>;
export declare function useMojitoWallets(): {
    wallets: IMojitoWallet[];
} & ReturnType<typeof useMojito>;
