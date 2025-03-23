export interface Instrument {
  id: number;
  ticker: string;
  name: string;
  type: string;
  last_price: number;
  close_price: number;
}
