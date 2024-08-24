import React from 'react';
import { Container } from 'react-bootstrap';
import AlignSelf from './AlignSelf';
import GridOptions from './GridOptions';
import HorizontalAlignment from './HorizontalAlignment';
import Verticalalignment from './Verticalalignment';

const Grid = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <GridOptions />
        <Verticalalignment />
        <AlignSelf />
        <HorizontalAlignment />
      </Container>
    </div>
  )
}

export default Grid;