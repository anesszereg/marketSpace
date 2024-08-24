import React from 'react'
import { Container } from 'react-bootstrap';
import ProgressArrowNav from './ProgressArrowNav';
import VerticalnavSteps from './VerticalnavSteps';

const FormWizard = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <ProgressArrowNav />
                <VerticalnavSteps/>
            </Container>
        </div>
    </React.Fragment>
  )
}

export default FormWizard;