import React from 'react';
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import {store} from "./store/store";
import {ManagePage} from './pages/manage/ManagePage';
import {MonitorPage} from "./pages/monitor/MonitorPage";


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    {<Route exact path="/" component={ManagePage}/>}
                    {<Route path="/manage" component={ManagePage}/>}
                    {<Route path="/monitor" component={MonitorPage}/>}
                </Switch>

                {/*<div className="App">*/}
                {/*    <ManagePage/>*/}
                {/*</div>*/}
            </Router>
        </Provider>
    );
}

export default App;
