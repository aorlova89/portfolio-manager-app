/*

Price chart:
-Should fit ½ of free vertical space left after previous blocks
-Should display value for selected context ( symbol or portfolio total )
-Should display Total line and current context line ( only total if total selected as context )
-Should display “realtime” value in current trading day or previous one if current isn’t started yet

 */

import React, {FC} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import {useSelector} from "react-redux";
import {selectPrices} from "../../store/monitor/selectors";
import {selectPortfolios} from "../../store/portfolio/selectors";


const PriceChart:FC = () => {
  const portfolioData = useSelector(selectPortfolios);
  const monitorData = useSelector(selectPrices);

  let selectedSymbol:any = portfolioData.find(
    entry => entry.symbol===monitorData.selectedItem
  );

  const options = {
    title: "Price Chart",
    chart: {height: 200},
    series: [
      {
        name: monitorData.selectedItem,
        data: selectedSymbol ? selectedSymbol['history'] : []
      }
    ]
  };

  return (
    <div className="price-chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default PriceChart;
