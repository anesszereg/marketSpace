import React from 'react'
import { Container } from 'react-bootstrap'
import PolarChart from './PolarChart';

const ApexPolar = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <PolarChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexPolar;