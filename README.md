# mojitonft-hooks

## Setup:

⚠ You must have Auth0, with CLIENT_ID provided by Sothebys, to use this library ⚠

#### Add to dependencies

```json
   "mojitonft-hooks": "https://github.com/mojitoinc/mojitonft-hooks"
```

## Available hooks:

### Mojito (source):

 - useActiveBids 
 - useCollection 
 - useCollectionItemBidsList 
 - useCollectionItemCurrentBids 
 - useCollectionItemRemainingCount 
 - useCollectionLotsIdList 
 - useFavorites
 - useInvoiceDownload 
 - useInvoices 
 - useLazyMojitoOneLot 
 - useMarketplaceCollectionsSlugWithItemsId 
 - useMojitoWallets 
 - useOrganization 
 - usePlaceBid 
 - useProfile 
 - useServerTime  

### Mojito Subscription (websocket): 

 - useMojitoCollectionSubscription 
 - useCollectionItemBidsSubscription 
 - useMojitoOneLotSubscription   

### Contentful (content): 

 - useContentfulAuctionsSlugList 
 - useContentfulAuthors 
 - useContentfulCollectors 
 - useContentfulFullLot 
 - useContentfulLots 
 - useContentfulShortLots   
