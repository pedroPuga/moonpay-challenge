import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import Utils from './utils';
import { IAsk, IBTCBuyData } from '../Models/models';

const headerConfiguration: AxiosRequestConfig = {
  headers: {
    'API-Key': process.env.KRAKEN_API_KEY,
  },
};

export default class Kraken {
  private static async getAsks(): Promise<string[][]> {
    try {
      const response: AxiosResponse = await axios.get(
        `${process.env.KRAKEN_API_URL}Depth?pair=XBTUSD`,
        headerConfiguration
      );
      return response.data.result.XXBTZUSD.asks;
    } catch (error: any) {
      console.log(error);
    }
  }

  static formatAsks = (asks: string[][]): IAsk[] =>
    asks.map((ask: string[]) => ({
      price: parseFloat(ask[0]),
      amount: parseFloat(ask[1]),
    }));

  public static async BTCBuyData(btcAmount: number): Promise<IBTCBuyData> {
    const asks: string[][] = await this.getAsks();
    const usdAmount: number = Utils.BTCPriceFromAsks(
      btcAmount,
      this.formatAsks(asks)
    );

    return {
      btcAmount,
      usdAmount,
      exchange: 'Kraken',
    };
  }
}
