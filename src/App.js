import React from "react";

//Components 
import MyNavbar from "./components/my-navbar/my-navbar";
import MyCarousel from "./components/my-carousel/my-carousel";
import TitleMessage from "./components/title-message/title-message";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <MyNavbar/>
      <MyCarousel/>
      <TitleMessage/>
    </div>
  );
}

export default App;
