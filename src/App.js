import React from "react";

//Components 
import MyNavbar from "./components/my-navbar/my-navbar";
import MyCarousel from "./components/my-carousel/my-carousel";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <MyNavbar/>
      <MyCarousel/>
    </div>
  );
}

export default App;
