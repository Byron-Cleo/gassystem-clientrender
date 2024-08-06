import React from 'react';
import { Nav } from 'react-bootstrap';

const GasMonthlyRevenueNavigationBar = () => {
  return (
    <>
      <Nav
        variant="pills"
        className="justify-content-center"
        activeKey="/3kg-month-revenue"
        style={{ backgroundColor: 'white' }}
      >
        <Nav.Item>
          <Nav.Link href="/3kg-month-revenue">3 Kg</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/6kg-month-revenue" eventKey="link-1">
            6 Kg
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/13kg-month-revenue" eventKey="link-2">
            13 Kg
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/25kg-month-revenue" eventKey="link-2">
            25 Kg
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/35kg-month-revenue" eventKey="link-2">
            35 Kg
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/50kg-month-revenue" eventKey="link-2">
            50 Kg
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default GasMonthlyRevenueNavigationBar;
