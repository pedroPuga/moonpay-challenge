import { IAsk } from '../Models/models';

export default class Utils {
  static BTCPriceFromAsks = (btcAmount: number, asks: IAsk[]): number => {
    let bitcoins: number = 0;
    let substractedBtcAmount: number = btcAmount;

    asks.some((ask: IAsk): boolean => {
      substractedBtcAmount = substractedBtcAmount - ask.amount;
      bitcoins += ask.price * ask.amount;
      if (substractedBtcAmount < 0) {
        bitcoins -= ask.price * Math.abs(substractedBtcAmount);
        return true;
      }
    });

    return bitcoins;
  };
}
