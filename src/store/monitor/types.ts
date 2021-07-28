export const SET_SYMBOL_PRICES = 'SET_SYMBOL_PRICES';
export const SET_CONTEXT = 'SET_CONTEXT';

interface SetSymbolPrices {
  type: typeof SET_SYMBOL_PRICES;
  payload: {
    symbol:string;
    shares: number;
    current:number;
    high:number;
    low:number;
    history:number[]
  }
}

interface SetContext {
  type: typeof SET_CONTEXT;
  payload: {
    item: string;
    profitLoss: number,
    contextHigh:number;
    contextLow:number;
  }
}

export type MonitorActions = SetSymbolPrices | SetContext;
