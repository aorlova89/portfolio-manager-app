import {MonitorActions, SET_CONTEXT} from "./types";

export const setContextValues =
  (item:string,
   profitLoss: number,
   contextHigh: number,
   contextLow: number): MonitorActions => ({
    type: SET_CONTEXT,
    payload: {item, profitLoss, contextHigh, contextLow}
  });

