import { Variables } from 'graphql-request';
import { UseQueryOptions, UseQueryResult } from 'react-query';
import { EContentfulQueries } from '../../data';
export declare function useContentfulFactory<T = any, V = Variables>(query: EContentfulQueries, variables?: V, options?: UseQueryOptions<T>): UseQueryResult<T> & {
    loading: boolean;
};
