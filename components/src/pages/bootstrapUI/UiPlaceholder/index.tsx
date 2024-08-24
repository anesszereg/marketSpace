import React from 'react'
import { Container } from 'react-bootstrap'
import Color from './Color';
import Default from './Default';
import WidthSizing from './WidthSizing';

const PlaceHolder = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <Default />
            <WidthSizing />
            <Color />
        </Container>
    </div>
  )
}

export default PlaceHolder;