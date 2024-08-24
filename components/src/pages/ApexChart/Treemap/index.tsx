import React from 'react'
import { Container } from 'react-bootstrap';
import TreemapChart from './TreemapChart';

const ApexTreemap = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <TreemapChart />
            </Container>
        </div>
    </React.Fragment>
  );
}

export default ApexTreemap;