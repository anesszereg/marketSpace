import React from 'react'
import { Container } from 'react-bootstrap'
import Backdrop from './Backdrop'
import Default from './Default'
import Placement from './Placement'

const Offcanvas = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <Default />
            <Placement />
            <Backdrop />
        </Container>
    </div>
  )
}

export default Offcanvas;