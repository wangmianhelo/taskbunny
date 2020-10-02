import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PostTask from "./pages/PostTask/PostTask";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post_a_task" exact component={PostTask} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
