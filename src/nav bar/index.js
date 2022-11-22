import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Olx bach do
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;