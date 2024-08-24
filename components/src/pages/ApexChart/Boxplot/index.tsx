import React from 'react'
import { Container } from 'react-bootstrap'
import BoxplotChart from './BoxplotChart'

const ApexBoxplot = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BoxplotChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexBoxplot