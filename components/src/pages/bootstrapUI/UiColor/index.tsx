import React from 'react';
import { Container } from 'react-bootstrap';
import BackgroundColors from './BackgroundColors';
import BorderColors from './BorderColors';
import TextColors from './TextColors';

const Colors = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <BackgroundColors />
            <TextColors />
            <BorderColors />
        </Container>
    </div>
  )
}

export default Colors;