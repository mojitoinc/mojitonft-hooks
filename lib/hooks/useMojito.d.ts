import { GraphQLClient, Variables } from 'graphql-request';
import { UseMutationResult, UseQueryOptions } from 'react-query';
import { EMojitoMutations, EMojitoQueries, IUseQueryResult } from '../data';
import { IMojitoCollection, IMojitoCollectionItem, IMojitoCollectionItemCurrentBids, IMojitoCollectionItemDetailsBid } from '../domain/interfaces';
export declare const mojitoGqlClient: GraphQLClient;
export interface IUseMojitoOptions<T = any, V = Variables> {
    query: EMojitoQueries;
    variables?: V;
    options?: UseQueryOptions<T>;
    force?: boolean;
    onlyAuthenticated?: boolean;
}
export declare function useMojito<T = any, V = Variables>({ query, variables, options, force, onlyAuthenticated, }: IUseMojitoOptions<T, V>): IUseQueryResult;
export declare function useLazyMojito<T = any, V = Variables>({ query, variables, options, force, onlyAuthenticated, }: IUseMojitoOptions<T, V>): [(options?: UseQueryOptions<T>) => void, IUseQueryResult];
export declare function useMojitoMutation<T = any, V = Variables>(query: EMojitoMutations, onlyAuthenticated?: boolean): [UseMutationResult<T, any, V, any>['mutateAsync'], UseMutationResult<T, any, V, any>];
export declare function useCollectionLotsIdList(slug: string): {
    collectionLotsIdList: Pick<IMojitoCollectionItem<any>, 'id' | 'name'>[];
    collectionLoading: boolean;
    collectionError: IUseQueryResult['error'];
};
export declare function useMarketplaceCollectionsSlugWithItemsId(): {
    marketplaceCollectionsSlugWithItemsId: IMojitoCollection[];
    marketplaceCollectionsSlugWithItemsIdLoading: boolean;
    marketplaceCollectionsSlugWithItemsIdError: IUseQueryResult['error'];
};
export declare function useCollectionItemCurrentBids(id?: string, _slug?: string): {
    allCurrentBids: IMojitoCollectionItemCurrentBids[];
    currentBids: IMojitoCollectionItemCurrentBids;
    currentBidsLoading: boolean;
    currentBidsError: IUseQueryResult['error'];
    currentBidsRefetch: () => void;
};
export declare function useCollectionItemBidsList(id: string, _slug?: string): {
    bids: IMojitoCollectionItemDetailsBid[];
    bidsLoading: boolean;
    bidsError: IUseQueryResult['error'];
    bidsRefetch: () => void;
};
export declare function useCollectionItemRemainingCount(id: string, _slug?: string): {
    remainingCount: number;
    remainingCountLoading: boolean;
    remainingCountError: IUseQueryResult['error'];
    remainingCountRefetch: () => void;
};
