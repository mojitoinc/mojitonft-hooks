import { QueryObserverResult, UseQueryOptions } from 'react-query';
import { IMojitoCollection } from '../../domain/interfaces';
export declare function useCollection<TSelectorResult = undefined>(props?: {
    url?: string;
    slug?: string;
    options?: UseQueryOptions<any>;
    selector?: (state: IMojitoCollection) => TSelectorResult;
}): {
    slug: string;
    isAuction: boolean;
    isFakeAuction: boolean;
} & (TSelectorResult extends undefined ? {
    collection: IMojitoCollection | null;
} & Omit<QueryObserverResult<IMojitoCollection, unknown>, 'data'> : {
    data?: TSelectorResult;
});
