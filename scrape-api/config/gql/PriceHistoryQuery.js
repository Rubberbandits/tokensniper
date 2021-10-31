exports.queryID = "PriceHistoryQuery"
exports.signature = "2296b822653e386debc6d90b742dada63460cce0443010fde34fef05739e50da"
exports.query = (variables) => `{\"id\":\"PriceHistoryQuery\",\"query\":\"query PriceHistoryQuery(\\n  $archetype: ArchetypeInputType\\n  $bucketSize: BucketSize = WEEK\\n  $cutoff: DateTime\\n  $collection: CollectionSlug\\n) {\\n  ...PriceHistory_data_XmWqM\\n}\\n\\nfragment PriceHistoryGraph_data on TradeHistoryType {\\n  results {\\n    bucketStart\\n    bucketEnd\\n    quantity\\n    volume {\\n      asset {\\n        assetContract {\\n          symbol\\n          id\\n        }\\n        decimals\\n        id\\n      }\\n      quantity\\n      id\\n    }\\n  }\\n}\\n\\nfragment PriceHistoryStats_data on TradeHistoryType {\\n  results {\\n    quantity\\n    volume {\\n      asset {\\n        decimals\\n        id\\n      }\\n      quantity\\n      id\\n    }\\n  }\\n}\\n\\nfragment PriceHistory_data_XmWqM on Query {\\n  tradeHistory(archetype: $archetype, minTime: $cutoff, collection: $collection, bucketSize: $bucketSize) {\\n    ...PriceHistoryStats_data\\n    ...PriceHistoryGraph_data\\n  }\\n}\\n\",\"variables\":{\"archetype\":null,\"bucketSize\":\"DAY\",\"cutoff\":\"${variables.cutoffDate || (new Date(Date.now() - 86400000)).toJSON()}\",\"collection\":\"${variables.collectionID}\"}}`