import React, {FC} from 'react';

import './NavigationBar.css';
import {Link, NavLink} from "react-router-dom";


const NavigationBar: FC = () => {
 // let isManageActive:boolean = true;
    return (
        <div className="nav-bar">
          <NavLink to={`/manage`} activeClassName="active-link">Manage</NavLink>
          <NavLink to={`/monitor`} activeClassName="active-link"
             >Monitor</NavLink>
        </div>
    );
};

export default NavigationBar;