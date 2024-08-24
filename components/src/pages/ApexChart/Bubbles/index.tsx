import React from 'react'
import { Container } from 'react-bootstrap'
import BubbleChart from './BubbleChart';

const ApexBubble = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BubbleChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexBubble;