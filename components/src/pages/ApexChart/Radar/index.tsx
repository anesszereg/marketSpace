import React from 'react'
import { Container } from 'react-bootstrap'
import RadarChart from './RadarChart'

const ApexRadar = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <RadarChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexRadar;