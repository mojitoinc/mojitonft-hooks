import { Variables } from 'graphql-request';
import { IContentfulLotData } from '../domain/interfaces/contentful.interface';
import { useMojitoMutation } from './useMojito';
export declare function usePlaceBidMutation<T = any, V = Variables>(lotData: IContentfulLotData): ReturnType<typeof useMojitoMutation>;
