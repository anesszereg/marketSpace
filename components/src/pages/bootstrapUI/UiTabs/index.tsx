import React from 'react';
import { Container } from 'react-bootstrap';
import AnimationBadge from './AnimationBadge';
import Border from './Border';
import ColoredLight from './ColoredLight';
import CustomArrow from './CustomArrow';
import CustomHoverVertical from './CustomHoverVertical';
import DefaultJustify from './DefaultJustify';
import HeaderBottom from './HeaderBottom';
import OutlineCustom from './OutlineCustom';
import Pill from './Pill';
import VerticalCard from './VerticalCard';

const Tabs = () => {
    return (
        <div className="page-content">
            <Container fluid>
                <DefaultJustify />
                <Pill />
                <VerticalCard />
                <CustomArrow />
                <HeaderBottom />
                <CustomHoverVertical />
                <AnimationBadge />
                <Border />
                <OutlineCustom />
                <ColoredLight/>
            </Container>
        </div>
    )
}

export default Tabs;