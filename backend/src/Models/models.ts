export interface IAsk {
  price: number;
  amount: number;
}

export interface IBTCBuyData {
  btcAmount: number;
  usdAmount: number;
  exchange: 'Binance' | 'Kraken' | 'Bitfinex';
}
