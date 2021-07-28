import {AppState} from "../store";
import {createSelector} from "@reduxjs/toolkit";

const state = (state: AppState) => state

export const selectPortfolios = createSelector(
  state,
  state => state.portfolio
);
