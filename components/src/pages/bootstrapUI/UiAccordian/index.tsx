import React from 'react'
import { Container } from 'react-bootstrap'
// import FillColored from './ FillColored'
import Collapse1 from './Collapse'
import DefaultFlush from './DefaultFlush'
import IconInlineBlockCollapse from './IconInlineBlockCollapse'
import LeftBordered from './LeftBordered'
import MultipleTargets from './MultipleTargets'
import Nesting from './Nesting'
import PlusIcon from './PlusIcon'
import WithWithoutIcons from './WithWithoutIcons'


const AccordianCollapse = () => {
    return (
        <div className="page-content">
            <Container fluid>
                <DefaultFlush />
                <WithWithoutIcons />
                <PlusIcon />
                <LeftBordered />
                <Nesting />

                <Collapse1 />
                <IconInlineBlockCollapse />
                <IconInlineBlockCollapse />
                <MultipleTargets />
            </Container>
        </div>
    )
}

export default AccordianCollapse;