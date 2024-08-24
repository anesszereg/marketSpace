import React from 'react'
import { Container } from 'react-bootstrap'
import BorderRadius from './BorderRadius';
import Borders from './Borders';
import CustomClass from './CustomClass';
import DisplayProperty from './DisplayProperty';
import ObjectFit from './ObjectFit';
import Overflow from './Overflow';
import Position from './Position';
import SelectionPointer from './SelectionPointer';
import Shadows from './Shadows';
import Stacks from './Stacks';
import WidthHeight from './WidthHeight';
import Zindex from './Z-index';

const Utilities = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <Borders />
            <BorderRadius />
            <DisplayProperty />
            <CustomClass />
            <Stacks />
            <ObjectFit />
            <Zindex />
            <SelectionPointer />
            <Overflow />
            <Position />
            <Shadows />
            <WidthHeight />
        </Container>
    </div>
  )
}

export default Utilities;