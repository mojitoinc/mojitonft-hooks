import { GraphQLClient, RequestDocument, Variables } from 'graphql-request';
import { QueryClient } from 'react-query';
export declare const queryClient: QueryClient;
interface IGqlRequestParams {
    query: RequestDocument;
    variables?: Variables;
    normalizerFn?: (data: any, variables?: Variables) => any;
    gqlClient: GraphQLClient;
}
export declare function gqlRequest<T>({ query, variables, normalizerFn, gqlClient, }: IGqlRequestParams): Promise<any>;
export {};
