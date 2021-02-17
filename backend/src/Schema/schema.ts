import Binance from '../Services/binance';
import Bitfinex from '../Services/bitfinex';
import Kraken from '../Services/kraken';

import { buildSchema, GraphQLSchema } from 'graphql';
import { IBTCBuyData } from '../Models/models';

export const schema: GraphQLSchema = buildSchema(`
  type Query {
    bestOrderBookBuyPrice(btcAmount: Int!): btcData,
  }
  type btcData {
    btcAmount: Int,
    usdAmount: Float,
    exchange: String,
  }
`);

export const root = {
  bestOrderBookBuyPrice: async ({ btcAmount }: { btcAmount: number }) => {
    const groupedExchanges: IBTCBuyData[] = await Promise.all([
      Binance.BTCBuyData(btcAmount),
      Bitfinex.BTCBuyData(btcAmount),
      Kraken.BTCBuyData(btcAmount),
    ]);
    // An efficient way to return the cheapest using sort
    return groupedExchanges.sort((a, b) => a.usdAmount - b.usdAmount)[0];
  },
};
