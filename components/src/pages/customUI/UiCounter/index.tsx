import React from 'react'
import { Container } from 'react-bootstrap';
import UiCounter from './UiCounter';

const Counters = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <UiCounter />
        </Container>
    </div>
  )
}

export default Counters;