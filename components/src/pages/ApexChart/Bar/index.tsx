import React from 'react'
import { Container } from 'react-bootstrap'
import BarChart from './BarChart'

const ApexBar = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BarChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexBar