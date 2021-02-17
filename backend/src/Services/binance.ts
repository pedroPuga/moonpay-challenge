import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import Utils from './utils';
import { IAsk, IBTCBuyData } from '../Models/models';

const headerConfiguration: AxiosRequestConfig = {
  headers: {
    'X-MBX-APIKEY': process.env.BINANCE_API_KEY,
  },
};

export default class Binance {
  private static async getAsks(): Promise<number[][]> {
    try {
      const response: AxiosResponse = await axios.get(
        `${process.env.BINANCE_API_URL}depth?symbol=BTCUSDT`,
        headerConfiguration
      );
      return response.data.asks;
    } catch (error: any) {
      console.log(error);
    }
  }

  private static formatAsks = (asks: number[][]): IAsk[] =>
    asks.map((ask: number[]) => ({ price: ask[0], amount: ask[1] }));

  public static async BTCBuyData(btcAmount: number): Promise<IBTCBuyData> {
    const asks: number[][] = await this.getAsks();
    const usdAmount: number = Utils.BTCPriceFromAsks(
      btcAmount,
      this.formatAsks(asks)
    );

    return {
      btcAmount,
      usdAmount,
      exchange: 'Binance',
    };
  }
}
