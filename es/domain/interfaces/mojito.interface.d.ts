import { EKycStatus, EMojitoCollectionItemAuctionLotStatus, EMojitoCollectionItemStatus, InvoiceStatus, SaleType } from '../enums';
import { IContentfulAuction, IContentfulLotData } from './contentful.interface';
export interface IMojitoProfileUserOrg {
    id: string;
    userId: string;
    user: IMojitoProfileUser;
    externalUserId: string;
    organizationId: string;
    organization: any;
    kycStatus: EKycStatus;
    role: string;
    bidAllowed: boolean;
    username: string;
    avatar: string;
    settings: {
        hasCompletedOnboarding?: boolean;
        notifications: {
            bidOnSold?: boolean;
            savedBidOn?: boolean;
            savedSold?: boolean;
        };
        privacy: {
            hideActivity?: boolean;
            showCollection?: boolean;
            showSaved?: boolean;
        };
    };
    notifications: {
        isTransactionalWithID: boolean;
        completeYourProfile: boolean;
        uploadID: boolean;
        contactUs: boolean;
    } | null;
}
export interface IApiKeys {
    id: string;
    key: string;
    updatedAt: string;
    createdAt: string;
}
export interface IMojitoWalletTokenMetaAttr {
    traitType: string;
    value: {
        intValue?: number;
        floatValue?: number;
        stringValue?: string;
    };
    displayType: string;
    maxValue: number;
}
export interface IMojitoWalletTokenMetadata {
    name: string;
    description: string;
    image: string;
    attributes: IMojitoWalletTokenMetaAttr[];
    externalURL: string;
    backgroundColor: string;
    animationURL: string;
    timestamp: string;
    language: string;
}
export interface IMojitoWalletToken {
    id: string;
    title: string;
    contractAddress: string;
    timeLastUpdated: string;
    metadata: IMojitoWalletTokenMetadata;
    walletId: string;
}
export interface IMojitoWalletNetwork {
    id: string;
    name: string;
    chainID: number;
    rpcURL: string;
    openSeaProxyAddress: string;
    wethAddress: string;
    safeMasterContractAddress: string;
    safeFactoryAddress: string;
    safeFallbackHandler: string;
}
export interface IMojitoWallet {
    id: string;
    name: string;
    address: string;
    parentType: string;
    parentID: string;
    network: IMojitoWalletNetwork;
    networkId: string;
    transactionId: string;
    deploymentTxHash: string;
    gnosisSafeURL: string;
    tokens: IMojitoWalletToken[];
}
export interface IMojitoProfileUser {
    id: string;
    avatar: string;
    username: string;
    name: string;
    email: string;
    wallets: IMojitoWallet[];
}
export interface IMojitoCollectionItemDetailsBid {
    id: string;
    marketplaceAuctionLotId: string;
    marketplaceAuctionLot: IMojitoCollectionItemAuctionLot;
    userId: string;
    amount: number;
    marketplaceUser: IMojitoProfileUser;
    userOrganization: IMojitoProfileUserOrg;
    nextBidIncrement: number;
    createdAt: string;
    maximumBid: number;
    isMine?: boolean;
    isCurrent?: boolean;
    isHold?: boolean;
    isOutbid?: boolean;
    isInfo?: boolean;
    isLost?: boolean;
    isSold?: boolean;
    isWin?: boolean;
    isStart?: boolean;
}
export interface IMojitoProfileRequest {
    me: IMojitoProfile;
}
export interface IMojitoProfile {
    id: string;
    user: IMojitoProfileUser;
    userOrgs: IMojitoProfileUserOrg[];
    apiKeys: IApiKeys;
    favoriteItems: (IMojitoCollectionItem<IMojitoCollectionItemAuctionLot> | IMojitoCollectionItem<IMojitoCollectionItemBuyNowLot>)[];
    activeBids: IMojitoCollectionItemDetailsBid[];
}
export interface IMojitoProfileCustomOrgs {
    hasNotifications: boolean;
}
export interface IMojitoViewType {
    isDuringSale: boolean;
    isPostSale: boolean;
    isPreSale: boolean;
}
export declare type IMojitoCollectionView = IMojitoViewType;
export interface IMojitoFeeStructure {
    from: number;
    rate: number;
    to: number;
}
export interface IMojitoInvoiceDetailsItem {
    collectionItemId: string;
    collectionTitle: string;
    collectionItemTitle: string;
    units: number;
    unitPrice: number;
    buyersPremium: number;
    overheadPremium: number;
    totalPrice: number;
    saleDate: string;
    taxes: number;
    salesTaxRate: number;
    destinationAddress: string;
    contentfulData?: IContentfulLotData;
}
export interface IMojitoInvoice {
    invoiceID: string;
    invoiceNumber: string;
    invoiceCreatedAt: string;
    externalUserID: string;
    internalUserID: string;
    items: IMojitoInvoiceDetailsItem[];
    status: InvoiceStatus;
}
export interface IMojitoCollectionFeeStructure {
    buyersPremiumRate: IMojitoFeeStructure[];
    overheadPremiumRate: IMojitoFeeStructure[];
}
interface IMojitoCollectionItemDetailsCustomProps {
    endTimestamp: number;
    saleView: IMojitoViewType;
}
export interface IMojitoCollectionItemAuctionLot extends IMojitoCollectionItemDetailsCustomProps {
    id: string;
    lotNumber: number;
    marketplaceCollectionItemId: string;
    startingBid: number;
    reservePrice: number;
    reserveMet: number;
    previewDate: string;
    startDate: string;
    endDate: string;
    status: EMojitoCollectionItemAuctionLotStatus;
    defaultConfig: any;
    feeStructure: IMojitoCollectionFeeStructure;
}
export interface IMojitoCollectionItemBuyNowLot extends IMojitoCollectionItemDetailsCustomProps {
    id: string;
    marketplaceCollectionItemId: string;
    unitPrice: number;
    totalUnits: number;
    totalAvailableUnits: number;
    startDate: string;
    endDate: string;
    sortNumber: number;
    invoice: IMojitoInvoice;
    remainingCount: number;
}
export declare type IMojitoCollectionItemDetails<T = IMojitoCollectionItemAuctionLot | IMojitoCollectionItemBuyNowLot> = T extends IMojitoCollectionItemAuctionLot ? IMojitoCollectionItemAuctionLot : T extends IMojitoCollectionItemBuyNowLot ? IMojitoCollectionItemBuyNowLot : IMojitoCollectionItemAuctionLot & IMojitoCollectionItemBuyNowLot;
export interface IMojitoCollectionItem<T = IMojitoCollectionItemAuctionLot | IMojitoCollectionItemBuyNowLot> {
    id: string;
    slug: string;
    collectionId: string;
    marketplaceTokenId: string;
    saleType: SaleType;
    status: EMojitoCollectionItemStatus;
    details: IMojitoCollectionItemDetails<T>;
    contentfulData: IContentfulLotData;
    name: string;
}
export interface IMojitoCollectionItemCurrentBids {
    id: string;
    details: {
        id: string;
        endDate: string;
        startDate: string;
        startingBid: number;
        currentBid: IMojitoCollectionItemDetailsBid;
        myBid: IMojitoCollectionItemDetailsBid | null;
    } & IMojitoCollectionItemDetailsCustomProps;
}
export interface ICollectionItemByIdBidsList {
    id: string;
    details: {
        id: string;
        endDate: string;
        startDate: string;
        bids: IMojitoCollectionItemDetailsBid[];
    };
}
export interface ICollectionItemByIdBidsListRequest {
    collectionItemById: ICollectionItemByIdBidsList;
}
export interface IIMojitoCollectionItemCurrentBidsRequest {
    collectionBySlug: {
        id: string;
        items: IMojitoCollectionItemCurrentBids[];
    };
}
export interface IIMojitoCollectionItemCurrentBidsItems {
    items: IMojitoCollectionItemCurrentBids[];
}
export interface IMojitoMarketplaceToken {
    id: string;
    name: string;
    marketplaceID: string;
    onChainTokenID: number;
    nftTokenID: string;
    nftContractAddress: string;
}
export interface IMojitoMarketplace {
    id: string;
    name: string;
    organizationID: string;
    theme: string;
    collections: IMojitoCollection[];
    tokens: IMojitoMarketplaceToken;
}
export declare type IMojitoMarketplaceResponse = {
    marketplace: IMojitoMarketplace;
};
export interface IMojitoCollection<TItem = IMojitoCollectionItemAuctionLot | IMojitoCollectionItemBuyNowLot> {
    id: string;
    slug: string;
    description: string;
    startDate: string;
    endDate: string;
    contentfulData: IContentfulAuction;
    items: IMojitoCollectionItem<TItem>[];
    hasMultipleLots: boolean;
    name: string;
    viewStatus: IMojitoCollectionView;
}
export interface IMojitoItemInvoice {
    collectionTitle: string;
    collectionItemTitle: string;
    totalPrice: number;
}
export interface IMojitoTokenData {
    description: string;
    external_url: string;
    image: string;
    name: string;
    attributes: {
        trait_type: string;
        value: string;
    }[];
}
export interface IUseMojitoOneLotSubscription {
    data: {
        getMarketplaceAuctionLot: Pick<IMojitoCollectionItemCurrentBids['details'], 'id' | 'currentBid' | 'myBid'>;
    };
}
export interface IUseMojitoCollectionSubscription {
    data: {
        marketplaceCollectionLotsUpdates: Pick<IMojitoCollectionItemCurrentBids['details'], 'id' | 'currentBid' | 'myBid'>;
    };
}
export {};
