import React, { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import store from './store';
import Account from "./pages/Account";


function App() {
  return (
    <Fragment>
      <Provider store = {store}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/account" exact component={Account} />
        </Switch>
      </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
