import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";

import Portfolio from "./views/Portfolio"
import PortfolioItem from "./views/PortfolioItem"


ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route exact path="/" component={Portfolio} />
            <Route path="/project/:projectname" component={PortfolioItem} />
        </App>
    </BrowserRouter>
    , document.querySelector("#root"));
