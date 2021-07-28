import get from "axios";


const API_KEY:string = '6JEXCL9MG3SMUQVT';
const BASE_URL:string = 'https://www.alphavantage.co/query';

interface SymbolsResponse {
  data: {
    bestMatches: {
      symbol:string;
      name: string;
      type: string;
      region:string;
      marketOpen: string;
      marketClose:string;
      timezone: string;
      currency: string;
      matchScore:string;
    }[];
  }
}

class SymbolService {
  symbolSearch = async (keywords:string): Promise<string[]> => {

    //TODO www.alphavantage.co allows only 5 requests per minute for demo account,
    // need to add debounce
  //   const response:SymbolsResponse = await get(`${BASE_URL}`,
  //     {params:
  //         {function: "SYMBOL_SEARCH",
  //           keywords: keywords,
  //           apikey: API_KEY
  //         }
  //     });
  //
  //   return response.data.bestMatches
  //     ? response.data.bestMatches.map((bestMatch: any) => bestMatch["1. symbol"])
  //     : [];
   return ['A', 'B', 'IBM', 'ASDDX', 'AAPL', 'QADA', 'QABSY', 'DEA', 'NI', 'MSFT'];
  };


  getSymbolInfo = async (symbol:string): Promise<any> => {
    const response: any = await get(`${BASE_URL}`,
      {
        params:
          {
            function: "TIME_SERIES_INTRADAY",
            symbol,
            interval: '60min',
            apikey: API_KEY
          }
      });

    return response.data ? response.data : [];
  }

  getSymbolPrices = async (symbol:string): Promise<any> => {
    const response: any = await get(`${BASE_URL}`,
      {
        params:
          {
            function: "TIME_SERIES_INTRADAY",
            symbol,
            interval: '60min',
            apikey: API_KEY
          }
      });

    let lastRefreshed:string = response.data['Meta Data']['3. Last Refreshed'];

    let highArr: number[] = Object.values(response.data['Time Series (60min)'])
      .map((e:any) => parseFloat(e['2. high']));

    let lowArr: number[] = Object.values(response.data['Time Series (60min)'])
      .map((e:any) => parseFloat(e['3. low']));

    let history: number[] = Object.values(response.data['Time Series (60min)'])
      .map((e:any) => parseFloat(e['4. close']));


    return response.data ?
      {currentPrice:parseFloat(response.data['Time Series (60min)'][lastRefreshed]['4. close']),
        high: Math.max(...highArr),
        low: Math.min(...lowArr),
        history: history
      } :
      {};
  }
};

const symbolService = new SymbolService();

export default symbolService;
