/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AssetSuccessModalContentOrderQueryVariables = {
    order: string;
};
export type AssetSuccessModalContentOrderQueryResponse = {
    readonly orderStatus: {
        readonly __typename: "OrderMatchingFailed";
        readonly transactionDetails: {
            readonly transactionHash: string;
        } | null;
    } | {
        readonly __typename: "OrderMatchingSuccessful";
        readonly transactionDetails: {
            readonly transactionHash: string;
        } | null;
    } | {
        readonly __typename: "OrderMatchingProcessing";
        readonly message: string | null;
    } | {
        readonly __typename: "OrderMatchingNoCounterOrders";
        readonly message: string | null;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    };
};
export type AssetSuccessModalContentOrderQuery = {
    readonly response: AssetSuccessModalContentOrderQueryResponse;
    readonly variables: AssetSuccessModalContentOrderQueryVariables;
};



/*
query AssetSuccessModalContentOrderQuery(
  $order: OrderRelayID!
) {
  orderStatus(order: $order) {
    __typename
    ... on OrderMatchingFailed {
      transactionDetails {
        transactionHash
      }
    }
    ... on OrderMatchingSuccessful {
      transactionDetails {
        transactionHash
      }
    }
    ... on OrderMatchingProcessing {
      message
    }
    ... on OrderMatchingNoCounterOrders {
      message
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "order"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TransactionDetailsType",
    "kind": "LinkedField",
    "name": "transactionDetails",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "transactionHash",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "order",
        "variableName": "order"
      }
    ],
    "concreteType": null,
    "kind": "LinkedField",
    "name": "orderStatus",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v1/*: any*/),
        "type": "OrderMatchingFailed",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v1/*: any*/),
        "type": "OrderMatchingSuccessful",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v2/*: any*/),
        "type": "OrderMatchingProcessing",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v2/*: any*/),
        "type": "OrderMatchingNoCounterOrders",
        "abstractKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AssetSuccessModalContentOrderQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AssetSuccessModalContentOrderQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "7d8d6954cdefef481e14e8e782599e1b",
    "id": null,
    "metadata": {},
    "name": "AssetSuccessModalContentOrderQuery",
    "operationKind": "query",
    "text": "query AssetSuccessModalContentOrderQuery(\n  $order: OrderRelayID!\n) {\n  orderStatus(order: $order) {\n    __typename\n    ... on OrderMatchingFailed {\n      transactionDetails {\n        transactionHash\n      }\n    }\n    ... on OrderMatchingSuccessful {\n      transactionDetails {\n        transactionHash\n      }\n    }\n    ... on OrderMatchingProcessing {\n      message\n    }\n    ... on OrderMatchingNoCounterOrders {\n      message\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f78c5d9ca558083693796d2b2b36c68c';
export default node;
