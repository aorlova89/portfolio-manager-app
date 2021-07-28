import symbolService from "../../services/symbol-service";
//import {setSymbolPrices} from "./actions";


export function getSymbolPrices() {
  // return function(dispatch:any, getState:any) {
  //   let symbols:[] = getState().portfolio.map((a:any) => a.symbol);
  //
  //   for (let i = 0; i < symbols.length; i++){
  //
  //     let selectedSymbol = (getState().portfolio)
  //       .find((item: { symbol: any; }) => item.symbol == symbols[i]);
  //
  //     let shares = selectedSymbol ? selectedSymbol.shares : 0;
  //
  //     symbolService.getSymbolInfo(symbols[i])
  //       .then(response => {
  //         dispatch(setSymbolPrices(
  //           symbols[i],
  //           shares,
  //           getPrice(response),
  //           getHigh(response),
  //           getLow(response),
  //           getPricesForChart(response)))
  //       })
  //       .catch();
  //   }
  // }
}

function getPrice(data:{[key: string]: any}): number {
  let lastRefreshed:string = data['Meta Data']['3. Last Refreshed'];

  return parseFloat(data['Time Series (60min)'][lastRefreshed]['4. close']);
}

function getHigh(data:{[key: string]: any}): number {
  let newArr: number[] = Object.values(data['Time Series (60min)'])
      .map((e:any) => parseFloat(e['2. high']));

  return Math.max(...newArr);
}

function getLow(data:{[key: string]: any}): number {
  let newArr: number[] = Object.values(data['Time Series (60min)'])
    .map((e:any) => parseFloat(e['2. high']));

  return Math.min(...newArr);
}

function getPricesForChart(data:{[key: string]: any}): number[] {
  let newArr: number[] = Object.values(data['Time Series (60min)'])
    .map((e:any) => parseFloat(e['4. close']));

  return newArr;
}
