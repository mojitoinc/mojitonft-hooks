import { GraphQLClient, Variables } from 'graphql-request';
import { UseQueryOptions, UseQueryResult } from 'react-query';
import { EContentfulQueries, IUseQueryResult } from '../data';
import { IContentfulAuthor, IContentfulCollector, IContentfulLotData } from '../domain/interfaces';
export declare const contentfulGqlClient: GraphQLClient;
export declare function useContentful<T = any, V = Variables>(query: EContentfulQueries, variables?: V, options?: UseQueryOptions<T>): UseQueryResult<T> & {
    loading: boolean;
};
export declare function useContentfulShortLots(mojitoID: string | string[]): {
    lots: IContentfulLotData[];
    lotError: any;
    lotLoading: boolean;
};
export declare function useContentfulFullLot(mojitoID: string): {
    lot: IContentfulLotData | null;
    lotError: any;
    lotLoading: boolean;
};
export declare function useContentfulAuthors(): {
    authors: IContentfulAuthor[];
    authorsError: any;
    authorsLoading: boolean;
};
export declare function useContentfulCollectors(): {
    collectors: IContentfulCollector[];
    collectorsError: any;
    collectorsLoading: boolean;
};
export declare function useContentfulLots(mojitoIds?: string[]): {
    lots: {
        [k: string]: IContentfulLotData;
    };
    lotsError: any;
    lotsLoading: boolean;
};
export declare function useContentfulAuctionsSlugList(): {
    auctionsSlugList: string[];
    auctionsSlugListLoading: boolean;
    auctionsSlugListError: IUseQueryResult['error'];
};
