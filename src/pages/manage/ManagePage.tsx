import React, {FC} from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

import './ManagePage.css';
import Table from '../../components/Table/Table';
import AddSymbol from "../../components/AddSymbol/AddSymbol";


export const ManagePage: FC = () => {
    return (
      <div className="manage-page">
          <div className="header">Portfolio Manager</div>
          <NavigationBar/>
          <Table/>
          <AddSymbol/>
      </div>
    );

}
