import React from 'react'
import { Container } from 'react-bootstrap'
import ActiveBordered from './ActiveBordered';
import BordercolorsWithoutborders from './BordercolorsWithoutborders';
import CardTable from './CardTables';
import DefaultStriped from './DefaultStriped';
import FootCaption from './FootCaption';
import HoverableRow from './HoverableRows';
import NestingVariants from './NestingVariants';
import Responsive from './Responsive';
import SmalltablesHead from './SmalltablesHead';
import Stripedcolumns from './Stripedcolumns';
import TablesColor from './TablesColors';
import Verticalalignment from './Verticalalignment';

const BasicTables = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <DefaultStriped />
            <Stripedcolumns />
            <TablesColor />
            <HoverableRow />
            <CardTable />
            <ActiveBordered />
            <BordercolorsWithoutborders />
            <SmalltablesHead />
            <FootCaption />
            <NestingVariants />
            <Verticalalignment />
            <Responsive />
        </Container>
    </div>
  )
}

export default BasicTables;