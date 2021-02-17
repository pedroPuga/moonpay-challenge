import axios, { AxiosResponse } from 'axios';
import { ICurrency } from '../Models/Models';

export default class CurrenciesService {
  public static async getCurrenciesData(): Promise<ICurrency[]> {
    try {
      const response: AxiosResponse = await axios.get(
        `${process.env.REACT_APP_MOONPAY_API}currencies`
      );
      return response.data;
    } catch (error: any) {
      console.log(error);
      return [];
    }
  }
}
