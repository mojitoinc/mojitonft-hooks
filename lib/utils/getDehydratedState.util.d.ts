import { DehydratedState } from 'react-query';
export declare function getDehydratedState(props: any, options?: {
    loadSingleLotPageFullInfo: boolean;
}): Promise<{
    dehydratedState: DehydratedState;
}>;
export default getDehydratedState;
