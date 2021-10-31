exports.queryID = "RankingsPageQuery"
exports.signature = "a2217d810d135be52cb160be754c326f877ac67c4387dafc2ff381db96659032"
exports.query = (variables) => `{\"id\":\"RankingsPageQuery\",\"query\":\"query RankingsPageQuery(\\n  $chain: [ChainScalar!]\\n  $count: Int!\\n  $cursor: String\\n  $sortBy: CollectionSort\\n  $parents: [CollectionSlug!]\\n  $createdAfter: DateTime\\n) {\\n  ...RankingsPage_data\\n}\\n\\nfragment RankingsPage_data on Query {\\n  rankings(after: $cursor, chains: $chain, first: $count, sortBy: $sortBy, parents: $parents, createdAfter: $createdAfter) {\\n    edges {\\n      node {\\n        createdDate\\n        name\\n        slug\\n        logo\\n        isVerified\\n        floorPrice\\n        stats {\\n          marketCap\\n          numOwners\\n          totalSupply\\n          sevenDayChange\\n          sevenDayVolume\\n          oneDayChange\\n          oneDayVolume\\n          thirtyDayChange\\n          thirtyDayVolume\\n          totalVolume\\n          id\\n        }\\n        id\\n        __typename\\n      }\\n      cursor\\n    }\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n    }\\n  }\\n}\\n\",\"variables\":{\"chain\":null,\"count\":100,\"cursor\":null,\"sortBy\":\"SEVEN_DAY_VOLUME\",\"parents\":null,\"createdAfter\":null}}`