import React from 'react';
import { Container } from 'react-bootstrap';
import AutoSize from './AutoSize';
import ColumnSize from './ColumnSize';
import FloatLabel from './FloatLabel';
import GridGutters from './GridGutters';
import HorizontalLabelSize from './HorizontalLabelSizing';
import InlineForm from './InlineForms';
import VerticalHorizontal from './VerticalHorizontal';

const FormLayout = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <GridGutters />
                <VerticalHorizontal />
                <HorizontalLabelSize />
                <ColumnSize />
                <AutoSize />
                <InlineForm />
                <FloatLabel />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default FormLayout;