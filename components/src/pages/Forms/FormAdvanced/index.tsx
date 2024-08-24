import React from 'react'
import { Container } from 'react-bootstrap';
import AutoComplete from './AutoComplete';
import Customcountry from './Customcountry';
import FormInputspin from './FormInputspin';

const FormAdvanced = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <Customcountry />
                <FormInputspin />
                <AutoComplete />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default FormAdvanced;