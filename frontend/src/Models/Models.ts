export interface ICurrency {
  addressRegex: RegExp | null;
  addressTagRegex: RegExp | null;
  autoCreateCurrencyAccountPair: boolean;
  code: string;
  confirmationsRequired: number | null;
  createdAt: Date;
  id: string;
  isSellSupported: boolean | null;
  isSupportedInUS: boolean | null;
  isSuspended?: boolean | null;
  maxAmount: number | null;
  minAmount: number | null;
  name: string;
  notAllowedUSStates: string[];
  precision: number;
  supportsAddressTag: boolean | null;
  supportsLiveMode: boolean | null;
  supportsTestMode: boolean | null;
  testnetAddressRegex: RegExp | null;
  type: 'fiat' | 'crypto';
  updatedAt: Date;
}

export interface IAppContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAppContextProviderProps {
  children: React.ReactNode;
}
