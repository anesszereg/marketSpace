import React from 'react'
import { Container } from 'react-bootstrap'
import BasicCenterEnd from './BasicCenterEnd'
import UiProfile from './UiProfile'

const Profiles = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <BasicCenterEnd />
            <UiProfile />
        </Container>
    </div>
  )
}

export default Profiles