import React from 'react';
import { Nav } from 'react-bootstrap';

const Top10NavigationBar = () => {
  return (
    <>
      <Nav
        variant="pills"
        className="justify-content-center"
        activeKey="/top-ten-3kg-customers"
        style={{ backgroundColor: 'white' }}
      >
        <Nav.Item>
          <Nav.Link href="/top-ten-3kg-customers">3 Kg</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/top-ten-6kg-customers" eventKey="link-1">
            6 Kg
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/top-ten-13kg-customers" eventKey="link-2">
            13 Kg
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/top-ten-25kg-customers" eventKey="link-2">
            25 Kg
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/top-ten-35kg-customers" eventKey="link-2">
            35 Kg
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/top-ten-50kg-customers" eventKey="link-2">
            50 Kg
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Top10NavigationBar;
