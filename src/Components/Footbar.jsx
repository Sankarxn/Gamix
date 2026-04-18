import React from 'react'
import { Container } from 'react-bootstrap'
import '../App.css'

function Footbar() {
  return (
    <footer className="footer-bar py-4 text-center">
      <Container>
        <p className="text-secondary mb-1 small">Copyright © 2026 Gamix Gaming Company. All rights reserved.</p>
        <p className="text-secondary small mb-0">Design: <span className="text-accent">Sankaranarayanan</span></p>
      </Container>
    </footer>
  )
}

export default Footbar
