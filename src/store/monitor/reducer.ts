import {MonitorActions, SET_CONTEXT} from "./types";

export interface MonitorState {
  selectedItem: string;
  contextProfitLoss: number;
  contextHigh: number;
  contextLow: number;
}

const MONITOR_INITIAL_STATE:MonitorState = {
  selectedItem: "", contextProfitLoss: 0, contextHigh: 0, contextLow: 0};

function reducer(state = MONITOR_INITIAL_STATE, action: MonitorActions) {
  switch (action.type) {
    case "SET_CONTEXT":
      return {
        ...state,
        selectedItem: action.payload.item,
        contextProfitLoss: action.payload.profitLoss,
        contextHigh: action.payload.contextHigh,
        contextLow: action.payload.contextLow
      };

    default:
      return state;
  }
}

export default reducer;
