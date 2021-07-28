import React, {FC} from "react";
import {useSelector} from "react-redux";
import {selectPrices} from "../../store/monitor/selectors";
import {selectPortfolios} from "../../store/portfolio/selectors";

import "./Statistics.css";

const Statistics:FC = () => {
  const portfolioData = useSelector(selectPortfolios);
  const monitorData = useSelector(selectPrices);

  const portfolioSymbolValues = portfolioData
    .find(e => e.symbol === monitorData.selectedItem);

  let initialPrice = 0;
  if (portfolioSymbolValues) initialPrice = portfolioSymbolValues.buy;

  let profitLossColor:string = monitorData.contextProfitLoss === 0 ? "black"
    : (monitorData.contextProfitLoss > 0 ? 'green' : 'red');

  let highColor:string = monitorData.contextHigh === 0 ? "black"
    : (monitorData.contextHigh > initialPrice) ? 'green' : 'red';

  let lowColor:string = monitorData.contextLow === 0 ? "black"
    : (monitorData.contextLow > initialPrice) ? 'green' : 'red';

  return (
    <div className="statistics">
    <span className={profitLossColor}>Profit/Loss: {monitorData.contextProfitLoss}</span>
    <span className={highColor}>High: {monitorData.contextHigh}</span>
    <span className={lowColor}>Low: {monitorData.contextLow}</span>
  </div>
  );
}

export default Statistics;
