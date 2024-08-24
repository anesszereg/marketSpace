import React from 'react'
import { Container } from 'react-bootstrap';
import MixedChart from './MixedChart';

const ApexMixed = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <MixedChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexMixed;