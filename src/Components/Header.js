import {Navbar, Nav, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'
import '../CSS/Header.css'

function Header() {
  return (
    <>
      <Navbar expand="lg">
          <Navbar.Brand  as={Link} to={"/"}>
            <img src="./Images/elemeslogo.png" alt="elemes_mainlogo"/>
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-center">
              <Nav>
                <Nav.Link as={Link} to={"#"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"#"}>About</Nav.Link>
                <Nav.Link as={Link} to={"#"}>Promotions</Nav.Link>
                <Nav.Link as={Link} to={"#"}>Blogs</Nav.Link>
                <Nav.Link as={Link} to={"#"}>Promotions</Nav.Link>
              </Nav>
          </Navbar.Collapse>

          <Nav.Link className="d-none d-lg-block" as={Link} to={"#"}>Masuk</Nav.Link>
          <Button className="btnHeader">Daftar Sekarang</Button>
      </Navbar>
    </>
  )
}

export default Header