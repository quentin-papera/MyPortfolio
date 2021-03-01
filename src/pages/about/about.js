import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Profile from '../../assets/img/profile/Profile.jpg'

import './about.css'

const About = () => {
	return (
		<div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
								<span>Hi there! I'm <strong>&nbsp;Quentin</strong></span>
									<p>Im a passionate newcomer in the world of technology, born and raised in Wellington, New Zealand. I am a Web Developer with React.js, Express.js, Node.js, and PostgreSQL as my tech stack.</p>
									<p>Growing up, I always loved working with technology. I was the family go to kid to solving household technical problems. This gave me a sense of pride, I wasn't the fastest or sportiest, but I could fix pretty much any piece of tech you throw at me. Even though this is late in my career, I still felt the urge to pursue my tech curiosity, and after thorough deliberation, Web Development is an excellent segue into IT.</p>
									<p>My customer focus and management background and my newfound passion. I feel I can make a real difference providing memorable experiences with the finest quality and service for my clients.</p>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1QLN4FSP3vRp40ZSVN_NiO1Vsl_aePo_J/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/quentin-papera" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/quentin-papera-b04534173/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
	)
}

export default About
