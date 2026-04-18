import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import '../App.css'

import fortnite from '../assets/Games/fornite.jpg'
import pubg from '../assets/Games/Pubg.jpg'
import gta5 from '../assets/Games/GTA 5.jpg'
import minecraft from '../assets/Games/Minecraft.jpg'
import eldenRing from '../assets/Games/Elden Ring.jpg'
import valorant from '../assets/Games/Valorent.jpg'
import forza from '../assets/Games/Forza Horizon.jpg'
import uncharted from '../assets/Games/Uncharted.jpg'

const games = [
  { id: 1, title: 'Fortnite', category: 'Sandbox', rating: '4.8', downloads: '2.3M', img: fortnite },
  { id: 2, title: 'PUBG', category: 'Battle S', rating: '4.8', downloads: '2.3M', img: pubg },
  { id: 3, title: 'GTA 5', category: 'Steam-X', rating: '4.8', downloads: '2.3M', img: gta5 },
  { id: 4, title: 'Minecraft', category: 'Legendary', rating: '4.8', downloads: '2.3M', img: minecraft },
  { id: 5, title: 'Elden Ring', category: 'Legendary', rating: '4.8', downloads: '2.3M', img: eldenRing },
  { id: 6, title: 'Valorant', category: 'Matrix Games', rating: '4.8', downloads: '2.3M', img: valorant },
  { id: 7, title: 'Forza Horizon', category: 'Max 3D', rating: '4.8', downloads: '2.3M', img: forza },
  { id: 8, title: 'Uncharted', category: 'Legend', rating: '4.8', downloads: '2.3M', img: uncharted },
]

function Popgames() {
  return (
    <Container className="mb-5">
      <div id='details' className="section-wrapper p-4 p-md-5 rounded-5">

        <div className="mb-4">
          <h2 className="text-white fw-bold fs-3">
            Most Popular <span className="text-accent underline">Right Now</span>
          </h2>
        </div>

        <Row className="g-4">
          {games.map((game) => (
            <Col key={game.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="game-card h-100 border-0 rounded-4 overflow-hidden p-3">
                <Card.Img
                  variant="top"
                  src={game.img}
                  className="rounded-4 mb-3 card-img-custom"
                  alt={game.title}
                />
                <Card.Body className="p-0 d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="text-white fw-bold mb-1">{game.title}</h6>
                    <small className="text-secondary">{game.category}</small>
                  </div>
                  <div className="text-end">
                    <div className="text-white fw-bold mb-1">
                      <span className="text-warning">★</span> {game.rating}
                    </div>
                    <small className="text-accent fw-bold">↓ {game.downloads}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button className="btn-accent rounded-pill px-4 py-2 fw-bold">Discover Popular</Button>
        </div>

      </div>
    </Container>
  )
}

export default Popgames
