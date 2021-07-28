import { PortfolioActions, SET_SYMBOL } from "./types";


export const setSymbol =
  (symbol: string,
   shares: number,
   buy: number,
   current: number,
   high: number,
   low: number,
   history: number[]): PortfolioActions => ({
      type: SET_SYMBOL,
      payload: { symbol, shares, buy, current, high, low, history }
  });
