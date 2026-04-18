import React from 'react'
import { Container, Button } from 'react-bootstrap'
import '../App.css'

import fortnite from '../assets/Games/fornite.jpg'
import gta5 from '../assets/Games/GTA 5.jpg'
import valorant from '../assets/Games/Valorent.jpg'

const library = [
  {
    id: 1,
    title: 'GTA 5',
    category: 'Steam-X',
    dateAdded: '14/06/2025',
    hoursPlayed: '578 H 22 Mins',
    status: 'Downloaded',
    downloaded: true,
    img: gta5,
  },
  {
    id: 2,
    title: 'Fortnite',
    category: 'Sandbox',
    dateAdded: '20/04/2026',
    hoursPlayed: '0 Mins',
    status: 'Not Downloaded',
    downloaded: false,
    img: fortnite,
  },
  {
    id: 3,
    title: 'Valorant',
    category: 'Matrix Games',
    dateAdded: '31/06/2024',
    hoursPlayed: '992 H 14 Mins',
    status: 'Downloaded',
    downloaded: true,
    img: valorant,
  },
]

function Gamelibrary() {
  return (
    <Container className="mb-5">
      <div id='streams' className="section-wrapper p-4 p-md-5 rounded-5">

        <div className="mb-4">
          <h2 className="text-white fw-bold fs-3">
            Your <span className="text-accent">Gaming</span> Library
          </h2>
        </div>

        <div className="d-flex flex-column gap-3">
          {library.map((game) => (
            <div key={game.id} className="library-row d-flex align-items-center p-3 rounded-4">
              <img
                src={game.img}
                alt={game.title}
                className="rounded-3 me-3 library-thumb"
              />

              <div className="me-4 library-col">
                <h6 className="text-white fw-bold mb-1">{game.title}</h6>
                <small className="text-secondary">{game.category}</small>
              </div>

              <div className="me-4 library-col">
                <small className="text-white d-block fw-semibold">Date Added</small>
                <small className="text-secondary">{game.dateAdded}</small>
              </div>

              <div className="me-4 library-col">
                <small className="text-white d-block fw-semibold">Hours Played</small>
                <small className="text-secondary">{game.hoursPlayed}</small>
              </div>

              <div className="me-4 library-col">
                <small className="text-white d-block fw-semibold">Currently</small>
                <small className="text-secondary">{game.status}</small>
              </div>

              <div className="ms-auto">
                {game.downloaded ? (
                  <Button variant="outline-secondary" size="sm" className="rounded-pill px-3 text-secondary">
                    Downloaded
                  </Button>
                ) : (
                  <Button size="sm" className="btn-accent rounded-pill px-3">
                    Download
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Button className="btn-accent rounded-pill px-4 py-2 fw-bold">
            View Your Library
          </Button>
        </div>

      </div>
    </Container>
  )
}

export default Gamelibrary
