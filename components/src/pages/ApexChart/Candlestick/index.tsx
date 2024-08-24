import React from 'react'
import { Container } from 'react-bootstrap'
import CandleChart from './CandleChart'

const ApexCandle = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <CandleChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexCandle