import {AppState} from "../store";
import {createSelector} from "@reduxjs/toolkit";

const state = (state: AppState) => state;

export const selectPrices = createSelector(
  state,
  state => state.monitor
);
