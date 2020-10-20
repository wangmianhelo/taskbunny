import React, { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import MyDashboard from "./pages/MyDashboard";
import store from "./store";
import PostTask from "./pages/PostTask/PostTask";
import BrowseTask from "./pages/BrowseTask";
import Notification from "./pages/Notification";
import Account from "./pages/Account";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mydashboard" component={MyDashboard}></Route>
            <Route path="/post_a_task" exact component={PostTask} />
            <Route path="/account" exact component={Account} />
            <Route path="/browse-tasks" exact component={BrowseTask} />
            <Route path="/notification" exact component={Notification}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
