import React from 'react'
import { Container } from 'react-bootstrap'
import BadgesCheckboxRadio from './BadgesCheckboxRadio';
import CustomContent from './CustomContent';
import ContextualLinkColored from './ContextualLinkColored';
import DefaultActiveDisabled from './DefaultActiveDisabled';
import HorizontalLists from './HorizontalLists';
import IconNumberContent from './IconNumberContent';
import LinkButtonFlush from './LinkButtonFlush';

const Lists = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <DefaultActiveDisabled />
            <LinkButtonFlush />
            <HorizontalLists />
            <ContextualLinkColored />
            <CustomContent />
            <BadgesCheckboxRadio />
            <IconNumberContent/>
        </Container>
    </div>
  )
}

export default Lists;