export interface IContentfulLotsQuery {
    lotCollection: {
        items: IContentfulLotData[];
    };
}
export interface IContentfulLotByIDQuery {
    data: any;
}
export interface IContentfulCollectorsQuery {
    collectorCollection: {
        items: IContentfulCollector[];
    };
}
export interface IContentfulAuthorsQuery {
    authorCollection: {
        items: IContentfulAuthor[];
    };
}
export interface IContentfulAuctionsQuery {
    auctionCollection: {
        items: IContentfulAuction[];
    };
}
export interface IContentfulLotData {
    lotId: number;
    mojitoId: string;
    sys: {
        id: string;
        publishedAt: string;
    };
    title: string;
    subtitle: string;
    imagesCollection: {
        items: IContentfulImageItem[];
    };
    author: {
        name: string;
        about: string;
        avatar: {
            url: string;
            title: string;
        };
        slug: string;
    };
    createdAt: string;
    estimatePrice: string;
    purchasedAt: string;
    smartContractAddress: string;
    tokenId: string;
    collector: IContentfulCollector;
    aboutLot: string;
    note: string;
    history: {
        buyerName: string;
        date: string;
        price: string;
        smartContractAddress: string;
    }[];
    video: string;
    conditionReportText: string;
    shortCollectorDescription: string;
    slug: string;
    nftLink: string;
    nftVideoIds: string[];
    mojitoLotData?: any;
    lotPreviewBackgroundColor: string;
    gridPreviewImage: {
        url: string;
        title: string;
    };
}
export interface IContentfulCollector {
    sys: {
        publishedAt: string;
    };
    name: string;
    about: string;
    avatar: {
        title: string;
        url: string;
    };
    smartContractAddress: string;
    linkedFrom: {
        lotCollection: {
            items: {
                title: string;
                mojitoId: string;
            }[];
        };
    };
    videoId: string;
    twitterLink: string;
    slug: string;
}
export interface IContentfulAuthor {
    sys: {
        publishedAt: string;
    };
    name: string;
    about: string;
    avatar: {
        title: string;
        url: string;
    };
    linkedFrom: {
        lotCollection: {
            items: {
                title: string;
            }[];
        };
    };
    twitterLink: string;
    slug: string;
}
declare type _auctionData = {
    [key: string]: string | number | any[] | _auctionData;
};
export interface IContentfulAuction {
    sys: {
        publishedAt: string;
    };
    description: string;
    duration: string;
    startDate: string;
    endDate: string;
    lotsCollection: {
        items: IContentfulLotData[];
    };
    name: string;
    title: string;
    subtitle: string;
    videoId: string;
    slug: string;
    saleId: string;
    data: _auctionData;
}
export interface IContentfulImageItem {
    url: string;
    title: string;
    contentType: string;
}
export interface IContentfulOrganization {
    homepageRedirect: IContentfulAuction;
}
export {};
