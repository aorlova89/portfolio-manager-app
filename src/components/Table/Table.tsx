import React, {FC} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import {useSelector} from "react-redux";
import {RowData} from '../RowData';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {selectPortfolios} from "../../store/portfolio/selectors";

interface Props {
  numbers?: number
}

const Table: FC<Props> = (props) => {
  const rowData = useSelector(selectPortfolios);

  const getTotalRow = (rowData: Array<RowData>): any[]  => {
    const initial:{symbol:string, shares:number, buy:number}
      = {symbol: 'Total', shares: 0, buy: 0};

    const rowTotalData = rowData.reduce((totals, rowData) =>
        (
          {
            symbol: 'Total',
            shares: totals.shares + rowData.shares,
            buy: totals.buy + rowData.shares*rowData.buy
          }
        ),
      initial
    );

    return [rowTotalData];
  }

  return (
    <div className="ag-theme-alpine" style={ {height: 400} }>
      <AgGridReact
        rowData={rowData}
        pinnedBottomRowData = {getTotalRow(rowData)}
      >
        <AgGridColumn
           width={300}
          field="symbol"
        />
        <AgGridColumn
           width={150}
          field="shares"
        />
        <AgGridColumn
           width={200}
          field="buy"
        />
      </AgGridReact>
    </div>

  );
};

export default Table;
