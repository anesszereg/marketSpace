import React from 'react'
import { Container } from 'react-bootstrap'
import CardBackgroundColor from './CardBackgroundColor';
import CardBorderColor from './CardBorderColor';
import CardGroups from './CardGroups';
import CardHeaderandFooter from './CardHeaderandFooter';
import CardImageCaps from './CardImageCaps ';
import CardsMasonry from './CardsMasonry';
import CardTextAlignment from './CardTextAlignment';
import GridCardGroups from './GridCardGroups';
import HorizontalCard from './HorizontalCard';
import StartCards from './StartCards';
import StretchedLink from './StretchedLink';
import UsingGridMarkup from './UsingGridMarkup';

const Cards = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <StartCards />
        <UsingGridMarkup />
        <CardTextAlignment />
        <CardHeaderandFooter />
        <CardImageCaps />
        <HorizontalCard />
        <CardBackgroundColor />
        <CardBorderColor />
        <CardGroups />
        <GridCardGroups />
        <CardsMasonry />
        <StretchedLink />
      </Container>
    </div>
  )
}

export default Cards;