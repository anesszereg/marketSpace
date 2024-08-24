import React from 'react'
import { Container } from 'react-bootstrap'
import Alignment from './Alignment'
import ExamplesNesting from './ExamplesNesting'

const Media = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <ExamplesNesting />
            <Alignment />
        </Container>
    </div>
  )
}

export default Media