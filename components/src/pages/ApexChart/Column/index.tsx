import React from 'react'
import { Container } from 'react-bootstrap'
import ColumnChart from './ColumnChart';

const ApexColumn = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <ColumnChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexColumn;