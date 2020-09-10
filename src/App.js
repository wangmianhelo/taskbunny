import React ,{ Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from'./style';
import Header from './common/header';
import Home from './pages/home/home';
import Account from './components/Account';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Header/>
      <BrowserRouter>
      <div>
        <Route path='/' exact component ={Home}></Route>
        <Route path='/account' exact component={Account}></Route>
      </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
