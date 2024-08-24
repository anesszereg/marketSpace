import React from 'react';
import { Container } from 'react-bootstrap';
import AreaChart from './AreaChart';

const ApexArea = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <AreaChart />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ApexArea;