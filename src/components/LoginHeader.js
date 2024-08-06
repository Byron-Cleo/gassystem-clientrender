import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const LoginHeader = () => {
  return (
    <header style={{ marginBottom: '5rem' }}>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container className="justify-content-md-center">
          <h1
            className="h1 text-center"
            style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span className="text-center">GAS INVENTORY SYSTEM</span>
          </h1>
        </Container>
      </Navbar>
    </header>
  );
};

export default LoginHeader;
