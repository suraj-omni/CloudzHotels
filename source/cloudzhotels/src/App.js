import React from "react";
import Header from "./components/header";
import HomeSlider from './components/slider';
import MainHome from './components/mainhome';
import CHFooter from './components/chfooter';

function App() {
  return (
    <div id="app-container" className="">
      <Header></Header>
      <div id="page-container">
        <HomeSlider></HomeSlider>
        <MainHome></MainHome>
        
      </div>
      <CHFooter></CHFooter>
    </div>
     
  );
}

export default App;
