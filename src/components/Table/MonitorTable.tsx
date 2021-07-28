import React, {FC} from "react";
import {AgGridColumn, AgGridReact} from "ag-grid-react";
import {useDispatch, useSelector} from "react-redux";
import {selectPortfolios} from "../../store/portfolio/selectors";
import {RowData} from "../RowData";
import {setContextValues} from "../../store/monitor/actions";

interface Props {
  numbers?: number
}

/*
-Should fit ½ of free vertical space left after previous blocks
-Header and Totals section should be fixed, Symbol rows should be scrollable
-User should be able to select Total and Symbol rows
-When user selects Total/Symbol row, context is set and previous two panes should display data related to context
 */

const MonitorTable:FC<Props> = (props) => {
  const portfolioData = useSelector(selectPortfolios);

  const dispatch = useDispatch();

  const getTotalRow = ((rowData: Array<RowData>):any[] => {
    const initial = {symbol:'Total', shares:0, buy:0, current:0};

    const totalRowData = portfolioData.reduce((totals, rowData) =>
      (
        {
          symbol: 'Total',
          shares: totals.shares + rowData.shares,
          buy: totals.buy + rowData.shares*rowData.buy,
          current: totals.current + rowData.shares*rowData.current
        }
      ), initial
    );

    return [totalRowData];
  });

  const onRowClicked = (data:any) => {

    if (data.data.symbol === 'Total') return;
    let selectedSymbol:any = portfolioData.find(entry =>
      entry.symbol===data.data.symbol && entry.buy === data.data.buy);

    let currentValue = selectedSymbol['current'] * data.data.shares;
    let initialValue = data.data.buy * data.data.shares;

    dispatch(setContextValues(
      data.data.symbol,
      currentValue - initialValue,
      selectedSymbol['high'],
      selectedSymbol['low']
    ));
  };

  return (
    <div className="ag-theme-alpine" style={ {height: 400} }>
      <AgGridReact
        rowData={portfolioData}
        pinnedBottomRowData = {getTotalRow(portfolioData)}
        rowSelection={'single'}
        onRowClicked={onRowClicked}
      >
        <AgGridColumn
          width={280}
          field="symbol"
        />
        <AgGridColumn
          width={120}
          field="shares"
        />
        <AgGridColumn
          width={120}
          field="buy"
        />
        <AgGridColumn
          width={120}
          field="current"
        />
      </AgGridReact>
    </div>
  );

}

export default MonitorTable;
