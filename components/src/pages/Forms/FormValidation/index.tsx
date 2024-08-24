import React from 'react'
import { Container } from 'react-bootstrap';
import Browserdefault from './Browserdefaults';
import CustomStyle from './CustomStyle';
import SupportedElement from './SupportedElements';
import TooltipsForm from './TooltipsForm';

const FormValidation = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <Browserdefault />
                <CustomStyle />
                <SupportedElement />
                <TooltipsForm />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default FormValidation;