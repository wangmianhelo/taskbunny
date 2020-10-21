import React, { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MyDashboard from "./pages/MyDashboard";
import store from "./store";
import PostTask from "./pages/PostTask/PostTask";
import Header from "./pages/Home/components/Header";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mydashboard" component={MyDashboard}></Route>
            <Route path="/post_a_task" exact component={PostTask} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
