import React, {FC, useEffect, useState} from 'react';

import './AddSymbol.css';
import {useDispatch} from "react-redux";
import {setSymbol} from "../../store/portfolio/actions";
import symbolService from '../../services/symbol-service';


const AddSymbol: FC = () => {
  const initialState: { symbol: string, shares: number, buy: number } = {symbol: '', shares: 0, buy: 0};
  const [state, setState] = useState(initialState);

  const [symbols, setSymbols] = useState<string[]>([]);

  const dispatch = useDispatch();

  const addValue = (key: string, value: string | number) => {
    setState({...state, [key]: value});
  }

  const addSymbol = () => {

    symbolService.getSymbolPrices(state.symbol).then(resp => {
      dispatch(setSymbol(
        state.symbol,
        state.shares,
        state.buy,
        resp.currentPrice,
        resp.high,
        resp.low,
        resp.history));
    });

    setState(initialState);
    setSymbols([]);
  }

  // const debounced = _.debounce((symbol) => symbolService.symbolSearch(symbol)
  //   .then(data => data && setSymbols(data)), 1000);

  return (
    <div className="add-symbol">
      <div id="symbol">
        <input
          list="symbols"
          onChange={(e) => {
            if (e.target.value) {
              symbolService.symbolSearch(e.target.value)
                 .then(data => data && setSymbols(data));

            }

            addValue("symbol", e.target.value);
          }
          }
          placeholder="Please enter symbol"
          value={state.symbol}
          type="text"
        />
        <datalist id="symbols">
          {symbols.map(symbol => (
              <option value={symbol}/>
            )
          )
          }
        </datalist>

      </div>
      <div id="shares">
        <input
          onChange={(e) =>
            addValue("shares", parseInt(e.target.value, 10))
          }
          placeholder="Shares"
          value={state.shares}
          type="number"
        />
      </div>
      <div id="buy">
        <input
          onChange={(e) =>
            addValue("buy", parseInt(e.target.value))
          }
          placeholder="Buy"
          // TODO: value should be float
          value={state.buy}
          type="number"
          step="0.01"
        />
      </div>
      <button
        className="addSymbolBtn"
        onClick={addSymbol}
        disabled={!(state.symbol && state.shares && state.buy)}
      >
        +
      </button>
    </div>
  );
}

export default AddSymbol;