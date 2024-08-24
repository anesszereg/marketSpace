import React from 'react'
import { Container } from 'react-bootstrap';
import ButtonsCheckboxsRadios from './ButtonsCheckboxsRadios';
import CustomForm from './CustomForms';
import Dropdowns from './Dropdowns';
import FileInputs from './FileInput';
import InputExamples from './InputExample';
import InputGroups from './InputGroup';
import InputGroupSizings from './InputGroupSizing';
import InputSizings from './InputSizing';
import MultipleInput from './MultipleInputs';

const BasicForm = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <InputExamples />
                <InputSizings />
                <FileInputs />
                <InputGroups />
                <InputGroupSizings />
                <MultipleInput />
                <ButtonsCheckboxsRadios />
                <Dropdowns />
                <CustomForm />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default BasicForm;