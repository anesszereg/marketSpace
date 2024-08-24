import React from 'react'
import { Container } from 'react-bootstrap'
import PieChart from './PieChart'

const ApexPie = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <PieChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexPie;