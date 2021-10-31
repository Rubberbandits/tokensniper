/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BucketSize = "DAY" | "HOUR" | "MONTH" | "WEEK" | "%future added value";
export type ArchetypeInputType = {
    assetContractAddress: string;
    tokenId: string;
    chain?: | "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value" | null | undefined;
};
export type PriceHistoryQueryVariables = {
    archetype?: ArchetypeInputType | null | undefined;
    bucketSize?: BucketSize | null | undefined;
    cutoff?: string | null | undefined;
    collection?: string | null | undefined;
};
export type PriceHistoryQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"PriceHistory_data">;
};
export type PriceHistoryQuery = {
    readonly response: PriceHistoryQueryResponse;
    readonly variables: PriceHistoryQueryVariables;
};



/*
query PriceHistoryQuery(
  $archetype: ArchetypeInputType
  $bucketSize: BucketSize = WEEK
  $cutoff: DateTime
  $collection: CollectionSlug
) {
  ...PriceHistory_data_XmWqM
}

fragment PriceHistoryGraph_data on TradeHistoryType {
  results {
    bucketStart
    bucketEnd
    quantity
    volume {
      asset {
        assetContract {
          symbol
          id
        }
        decimals
        id
      }
      quantity
      id
    }
  }
}

fragment PriceHistoryStats_data on TradeHistoryType {
  results {
    quantity
    volume {
      asset {
        decimals
        id
      }
      quantity
      id
    }
  }
}

fragment PriceHistory_data_XmWqM on Query {
  tradeHistory(archetype: $archetype, minTime: $cutoff, collection: $collection, bucketSize: $bucketSize) {
    ...PriceHistoryStats_data
    ...PriceHistoryGraph_data
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "archetype"
},
v1 = {
  "defaultValue": "WEEK",
  "kind": "LocalArgument",
  "name": "bucketSize"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collection"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cutoff"
},
v4 = {
  "kind": "Variable",
  "name": "archetype",
  "variableName": "archetype"
},
v5 = {
  "kind": "Variable",
  "name": "bucketSize",
  "variableName": "bucketSize"
},
v6 = {
  "kind": "Variable",
  "name": "collection",
  "variableName": "collection"
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PriceHistoryQuery",
    "selections": [
      {
        "args": [
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "Variable",
            "name": "cutoff",
            "variableName": "cutoff"
          }
        ],
        "kind": "FragmentSpread",
        "name": "PriceHistory_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "PriceHistoryQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "Variable",
            "name": "minTime",
            "variableName": "cutoff"
          }
        ],
        "concreteType": "TradeHistoryType",
        "kind": "LinkedField",
        "name": "tradeHistory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TradeHistoryDataPoint",
            "kind": "LinkedField",
            "name": "results",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetQuantityType",
                "kind": "LinkedField",
                "name": "volume",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetType",
                    "kind": "LinkedField",
                    "name": "asset",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "decimals",
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetContractType",
                        "kind": "LinkedField",
                        "name": "assetContract",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "symbol",
                            "storageKey": null
                          },
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bucketStart",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bucketEnd",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5fa0bdae058870c3b27cbee6229bd8e5",
    "id": null,
    "metadata": {},
    "name": "PriceHistoryQuery",
    "operationKind": "query",
    "text": "query PriceHistoryQuery(\n  $archetype: ArchetypeInputType\n  $bucketSize: BucketSize = WEEK\n  $cutoff: DateTime\n  $collection: CollectionSlug\n) {\n  ...PriceHistory_data_XmWqM\n}\n\nfragment PriceHistoryGraph_data on TradeHistoryType {\n  results {\n    bucketStart\n    bucketEnd\n    quantity\n    volume {\n      asset {\n        assetContract {\n          symbol\n          id\n        }\n        decimals\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistoryStats_data on TradeHistoryType {\n  results {\n    quantity\n    volume {\n      asset {\n        decimals\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistory_data_XmWqM on Query {\n  tradeHistory(archetype: $archetype, minTime: $cutoff, collection: $collection, bucketSize: $bucketSize) {\n    ...PriceHistoryStats_data\n    ...PriceHistoryGraph_data\n  }\n}\n"
  }
};
})();
(node as any).hash = '93fe8ee3ac34e185ec084c575aa66d63';
export default node;
