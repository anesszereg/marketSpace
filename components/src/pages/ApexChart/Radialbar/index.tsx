import React from 'react'
import { Container } from 'react-bootstrap'
import RadialbarChart from './RadialbarChart';

const ApexRadialbar = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <RadialbarChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexRadialbar;