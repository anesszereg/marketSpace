import React from 'react'
import { Container } from 'react-bootstrap';
import LineChart from './LineChart';

const ApexLine = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <LineChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexLine;