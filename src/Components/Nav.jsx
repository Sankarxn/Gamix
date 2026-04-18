import React from 'react'
import { Navbar, Container, Nav as BsNav, Form, FormControl } from 'react-bootstrap'
import '../App.css'

function Nav() {
  return (
    <Navbar expand="lg" variant="dark" className="py-3 custom-navbar">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center gap-2 fw-bold text-white fs-4">
          Gamix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex mx-auto search-form my-3 my-lg-0">
            <FormControl type="search" placeholder="Type Something" className="rounded-pill search-input border-0 shadow-none text-light" aria-label="Search" />
          </Form>
          <BsNav className="align-items-center">
            <BsNav.Link href="#browse" className="text-secondary mx-2">Browse</BsNav.Link>
            <BsNav.Link href="#details" className="text-secondary mx-2">Details</BsNav.Link>
            <BsNav.Link href="#streams" className="text-secondary mx-2">Streams</BsNav.Link>
            <div className="profile-btn d-flex align-items-center rounded-pill ms-lg-3 px-3 py-1 mt-3 mt-lg-0">
              <span className="text-light me-2">Profile</span>

            </div>
          </BsNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav
