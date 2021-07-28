import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunk from "redux-thunk";

import portfolioReducer from './portfolio/reducer';
import monitorReducer, {MonitorState} from './monitor/reducer';
import { RowData } from "../components/RowData";

export interface AppState {
  portfolio: RowData[],
  monitor: MonitorState
}

const middleware = [thunk];

const reducers = combineReducers({ portfolio: portfolioReducer,
  monitor: monitorReducer });

const composeEnhancer =
  (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store = createStore(reducers,
    composeEnhancer(applyMiddleware(...middleware)));

export default store;
