import React from 'react';
import { Container } from 'react-bootstrap';
import FormTomSelect from './Customoption';

const ReactSelect = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <FormTomSelect />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ReactSelect;