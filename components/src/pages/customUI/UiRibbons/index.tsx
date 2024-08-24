import React from 'react'
import { Container } from 'react-bootstrap';
import FilledRibbons from './FilledRibbons';
import RibbonShape from './RibbonShape';
import RibbonsHover from './RibbonsHover';
import RoundShape from './RoundShape';
import VerticalShape from './VerticalShape';

const Ribbons = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <RoundShape />
            <VerticalShape/>
            <RibbonShape />
            <FilledRibbons />
            <RibbonsHover />
        </Container>
    </div>
  )
}

export default Ribbons;