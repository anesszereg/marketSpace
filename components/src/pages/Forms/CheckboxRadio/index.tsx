import React from 'react'
import { Container } from 'react-bootstrap'
import Checkboxform from './Checkboxform'
import CustomCheckboxes from './CustomCheckbox'
import CustomRadioForm from './CustomRadioForm'
import FormCustomSwitches from './FormCustomSwitches'
import FormRadios from './FormRadios'
import FromWithoutLabels from './FromWithoutLabels'
import Inlinecheckradio from './Inlinecheckradio'
import RadioToggle from './RadioToggle'
import SwitchesColor from './SwitchColor'
import SwitchesForm from './SwitchesForm'

const FormCheckboxRadio = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <Checkboxform />
                <CustomCheckboxes />
                <FormRadios />
                <CustomRadioForm />
                <SwitchesForm />
                <SwitchesColor />
                <FormCustomSwitches/>
                <Inlinecheckradio />
                <FromWithoutLabels />
                <RadioToggle />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default FormCheckboxRadio;