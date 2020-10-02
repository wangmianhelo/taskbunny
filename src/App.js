import React, { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MyDashboard from "./pages/MyDashboard";
import store from './store';


function App() {
  return (
    <Fragment>
      <Provider store = {store}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mydashboard" component={MyDashboard}></Route>
        </Switch>
      </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
