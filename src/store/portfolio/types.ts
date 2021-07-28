export const SET_SYMBOL = 'SET_SYMBOL';


interface SetSymbol {
  type: typeof SET_SYMBOL;
  payload: {
    symbol:string;
    shares: number;
    buy: number;
    current:number;
    high:number;
    low:number;
    history:number[]
  }
}

export type PortfolioActions = SetSymbol ;
