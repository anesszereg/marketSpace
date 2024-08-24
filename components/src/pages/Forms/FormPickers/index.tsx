import React from 'react'
import { Container } from 'react-bootstrap';
import Flatpicker from './Flatpicker';
import Timepicker from './Timepicker';

const FormPickers = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <Flatpicker />
                <Timepicker />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default FormPickers;