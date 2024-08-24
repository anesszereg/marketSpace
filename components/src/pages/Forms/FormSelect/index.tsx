import React from 'react'
import { Container } from 'react-bootstrap';
import Choice from './Choice';
import DefaultSelects from './DefaultSelect';
import MenuSizes from './MenuSize';
import Selectsizes from './Selectsizes';

const FormSelect = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <DefaultSelects />
                <MenuSizes />
                <Selectsizes />
                <Choice />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default FormSelect;