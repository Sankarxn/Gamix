import React from 'react'
import { Container, Button } from 'react-bootstrap'
import '../App.css'

function Hero() {
  return (
    <Container className="mb-5">
      <div id='browse' className="hero-section text-center p-5 rounded-5">
        <p className="text-light fs-5 mb-2">Welcome To Gamix</p>
        <h1 className="text-white fw-bold mb-4 display-5">
          <span className="text-accent">BROWSE</span> OUR POPULAR<br /> GAMES HERE
        </h1>
        <Button className="btn-accent rounded-pill px-4 py-2 mt-2">Browse Now</Button>
      </div>
    </Container>
  )
}

export default Hero
