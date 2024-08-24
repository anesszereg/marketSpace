import React from 'react'
import { Container } from 'react-bootstrap';
import TimelineChart from './TimelineChart';

const ApexTimeline = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <TimelineChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexTimeline;