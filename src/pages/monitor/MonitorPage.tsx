import React, {FC} from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

import './MonitorPage.css';
import MonitorTable from "../../components/Table/MonitorTable";
import Statistics from "../../components/Statistics/Statistics";
import PriceChart from "../../components/PriceChart/PriceChart";

export const MonitorPage: FC = () => {
  return (
    <div className="monitor-page">
      <div className="header">Portfolio Manager</div>
      <NavigationBar/>
      <Statistics/>
      <PriceChart/>
      <MonitorTable/>
    </div>
  );
}
