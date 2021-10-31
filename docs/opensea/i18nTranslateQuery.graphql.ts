/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Language = "ENGLISH" | "JAPANESE" | "KOREAN" | "%future added value";
export type i18nTranslateQueryVariables = {
    texts: Array<string>;
    targetLanguage: Language;
};
export type i18nTranslateQueryResponse = {
    readonly translations: ReadonlyArray<{
        readonly text: string;
    }>;
};
export type i18nTranslateQuery = {
    readonly response: i18nTranslateQueryResponse;
    readonly variables: i18nTranslateQueryVariables;
};



/*
query i18nTranslateQuery(
  $texts: [String!]!
  $targetLanguage: Language!
) {
  translations(texts: $texts, targetLanguage: $targetLanguage) {
    text
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "targetLanguage"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "texts"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "targetLanguage",
        "variableName": "targetLanguage"
      },
      {
        "kind": "Variable",
        "name": "texts",
        "variableName": "texts"
      }
    ],
    "concreteType": "TranslationType",
    "kind": "LinkedField",
    "name": "translations",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "i18nTranslateQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "i18nTranslateQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "bd4fec6bbfa5807517931754c0008828",
    "id": null,
    "metadata": {},
    "name": "i18nTranslateQuery",
    "operationKind": "query",
    "text": "query i18nTranslateQuery(\n  $texts: [String!]!\n  $targetLanguage: Language!\n) {\n  translations(texts: $texts, targetLanguage: $targetLanguage) {\n    text\n  }\n}\n"
  }
};
})();
(node as any).hash = '7e5ea61044cd9333256f28761728749a';
export default node;
