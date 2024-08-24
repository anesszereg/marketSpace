import React from 'react';
import { Container } from 'react-bootstrap';
import ScatterChart from './ScatterChart';

const ApexScatter = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <ScatterChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexScatter