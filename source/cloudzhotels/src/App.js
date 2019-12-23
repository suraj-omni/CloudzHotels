import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import MainHome from './components/mainhome';
import CHFooter from './components/chfooter';
import SigiriyaHome from './components/sigiriyahotelhome';

function App() {
  return (
    <div id="app-container" className="">
      <Header></Header>
      <div id="page-container">
        <Switch>        
        <Route path="/cloudzsigiriya" component={SigiriyaHome}></Route>
        <Route path="/" component={MainHome}></Route>
        </Switch>
      </div>
      <CHFooter></CHFooter>
    </div>
     
  );
}

export default App;
