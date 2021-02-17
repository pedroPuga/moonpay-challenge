import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import Utils from './utils';
import { IAsk, IBTCBuyData } from '../Models/models';

const headerConfiguration: AxiosRequestConfig = {
  headers: {
    'X-BFX-APIKEY': process.env.BITFINEX_API_KEY,
  },
};

export default class Bitfinex {
  private static async getAsks(): Promise<IAsk[]> {
    try {
      const response: AxiosResponse = await axios.get(
        `${process.env.BITFINEX_API_URL}book/btcusd`,
        headerConfiguration
      );
      return response.data.asks;
    } catch (error: any) {
      console.log(error);
    }
  }
  public static async BTCBuyData(btcAmount: number): Promise<IBTCBuyData> {
    const asks: IAsk[] = await this.getAsks();
    const usdAmount: number = Utils.BTCPriceFromAsks(btcAmount, asks);

    return {
      btcAmount,
      usdAmount,
      exchange: 'Bitfinex',
    };
  }
}
