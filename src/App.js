import React, { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
