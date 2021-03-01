import React from "react";
import Fade from "react-reveal/Fade"
import { Parallax } from "react-parallax"
import Container from "react-bootstrap/Container"
// import Particles from "react-particles-js"
// import { particlesOptions } from "./particlesOptions"

//Components 
import MyNavbar from "./components/my-navbar/my-navbar"
import MyCarousel from "./components/my-carousel/my-carousel"
import TitleMessage from "./components/title-message/title-message"
import About from "./pages/about/about"

import './App.css';

const App = () => {
  return (
    <div className="App">
      <MyNavbar/>
      <MyCarousel/>
      <TitleMessage/>
      {/* <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> */}

      {/* about me section  */}

        <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={require("./assets/img/parallax/background.webp")}
            bgImageAlt=""
            strength={-200}>
          
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About/>
              </Fade>
            </Container>
          
        </Parallax>

    </div>
  );
}

export default App;
