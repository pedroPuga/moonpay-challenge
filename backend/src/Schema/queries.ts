export const bestOrderBookQuery: string = `
  query bestOrderBookBuyPrice($btcAmount: Int!) {
    bestOrderBookBuyPrice(btcAmount: $btcAmount) {
      btcAmount,
      usdAmount,
      exchange
    }
  }
`;
