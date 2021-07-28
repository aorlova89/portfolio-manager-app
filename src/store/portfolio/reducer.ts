import { PortfolioActions } from "./types";
import { RowData } from "../../components/RowData";

const PORTFOLIO_INITIAL_STATE: RowData[] = [];

function reducer(state: RowData[] = PORTFOLIO_INITIAL_STATE, action: PortfolioActions) {
    switch (action.type) {
        case 'SET_SYMBOL':
           return [...state, { ...action.payload }];

        default:
            return state;
    }


}

export default reducer;
