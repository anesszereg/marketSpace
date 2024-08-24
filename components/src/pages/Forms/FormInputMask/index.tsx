import React from 'react';
import { Container } from 'react-bootstrap';
import InputMask from './InputMask';

const FormInputMask = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <InputMask />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default FormInputMask;