import React from 'react'
import { Container } from 'react-bootstrap'
import HtmlCssJs from './HtmlCssJs'

const HightLights = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <HtmlCssJs />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default HightLights