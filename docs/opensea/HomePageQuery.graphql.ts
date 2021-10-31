/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HomePageQueryVariables = {};
export type HomePageQueryResponse = {
    readonly promotions: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"Promotions_promotions">;
    }>;
    readonly featuredAsset: {
        readonly " $fragmentRefs": FragmentRefs<"Featured_data">;
    };
};
export type HomePageQuery = {
    readonly response: HomePageQueryResponse;
    readonly variables: HomePageQueryVariables;
};



/*
query HomePageQuery {
  promotions {
    ...Promotions_promotions
    id
  }
  featuredAsset {
    ...Featured_data
    id
  }
}

fragment AssetMedia_asset on AssetType {
  animationUrl
  backgroundColor
  collection {
    displayData {
      cardDisplayStyle
    }
    id
  }
  isDelisted
  displayImageUrl
}

fragment Featured_data on AssetType {
  name
  imagePreviewUrl
  imageUrl
  creator {
    imageUrl
    user {
      publicUsername
      id
    }
    id
  }
  ...asset_url
  ...AssetMedia_asset
  ...itemEvents_data
}

fragment Promotions_promotions on PromotionType {
  id
  promoCardImg
  promoCardLink
  promoHeader
  cardColor
  promoSubtitle
  saleStartTime
  saleEndTime
}

fragment asset_url on AssetType {
  assetContract {
    address
    chain
    id
  }
  tokenId
}

fragment itemEvents_data on AssetType {
  assetContract {
    address
    chain
    id
  }
  tokenId
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomePageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PromotionType",
        "kind": "LinkedField",
        "name": "promotions",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Promotions_promotions"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AssetType",
        "kind": "LinkedField",
        "name": "featuredAsset",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Featured_data"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomePageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PromotionType",
        "kind": "LinkedField",
        "name": "promotions",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "promoCardImg",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "promoCardLink",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "promoHeader",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cardColor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "promoSubtitle",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "saleStartTime",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "saleEndTime",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AssetType",
        "kind": "LinkedField",
        "name": "featuredAsset",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "imagePreviewUrl",
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AccountType",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "UserType",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "publicUsername",
                    "storageKey": null
                  },
                  (v0/*: any*/)
                ],
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          },
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
                "name": "address",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "chain",
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tokenId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "animationUrl",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "backgroundColor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "CollectionType",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "DisplayDataType",
                "kind": "LinkedField",
                "name": "displayData",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cardDisplayStyle",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isDelisted",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "displayImageUrl",
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e975344a08964005f60788e93a260018",
    "id": null,
    "metadata": {},
    "name": "HomePageQuery",
    "operationKind": "query",
    "text": "query HomePageQuery {\n  promotions {\n    ...Promotions_promotions\n    id\n  }\n  featuredAsset {\n    ...Featured_data\n    id\n  }\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n  isDelisted\n  displayImageUrl\n}\n\nfragment Featured_data on AssetType {\n  name\n  imagePreviewUrl\n  imageUrl\n  creator {\n    imageUrl\n    user {\n      publicUsername\n      id\n    }\n    id\n  }\n  ...asset_url\n  ...AssetMedia_asset\n  ...itemEvents_data\n}\n\nfragment Promotions_promotions on PromotionType {\n  id\n  promoCardImg\n  promoCardLink\n  promoHeader\n  cardColor\n  promoSubtitle\n  saleStartTime\n  saleEndTime\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment itemEvents_data on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n"
  }
};
})();
(node as any).hash = '7d0de3c5c67b1b686c74d048303e38e2';
export default node;
