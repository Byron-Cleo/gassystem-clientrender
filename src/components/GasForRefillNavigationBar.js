import React from 'react';
import { Nav } from 'react-bootstrap';

const GasForRefillNavigationBar = () => {
  return (
    <>
      <Nav
        variant="pills"
        className="justify-content-center"
        activeKey="/gas-for-3kg-refill"
        style={{ backgroundColor: 'white' }}
      >
        <Nav.Item>
          <Nav.Link href="/gas-for-3kg-refill">3 Kg</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/gas-for-6kg-refill" eventKey="link-1">
            6 Kg
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/gas-for-13kg-refill" eventKey="link-2">
            13 Kg
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/gas-for-25kg-refill" eventKey="link-2">
            25 Kg
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/gas-for-35kg-refill" eventKey="link-2">
            35 Kg
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/gas-for-50kg-refill" eventKey="link-2">
            50 Kg
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default GasForRefillNavigationBar;
