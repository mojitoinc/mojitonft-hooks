import { useQuery } from 'react-query';
export declare function useInvoiceDownload(invoiceId: string): {
    downloadInvoice: ReturnType<typeof useQuery>['refetch'];
    invoiceLoading: boolean;
    error: ReturnType<typeof useQuery>['error'];
};
