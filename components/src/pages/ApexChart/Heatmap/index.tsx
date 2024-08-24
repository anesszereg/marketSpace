import React from 'react'
import { Container } from 'react-bootstrap';
import HeatmapChart from './HeatmapChart';

const ApexHeatmap = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <HeatmapChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexHeatmap;