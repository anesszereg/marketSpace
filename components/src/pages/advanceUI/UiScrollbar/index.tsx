import React from 'react';
import { Container } from 'react-bootstrap';
import Darktrack from './Darktrack';
import DefaultAuto from './DefaultAuto';
import InfoWarningDanger from './InfoWarningDanger';
import PrimarySecondarySuccess from './PrimarySecondarySuccess';
import RTLDireaction from './RTLDireaction';

const ScrollBar = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <DefaultAuto />
            <RTLDireaction />
            <PrimarySecondarySuccess />
            <InfoWarningDanger />
            <Darktrack />
        </Container>
    </div>
  )
}

export default ScrollBar;