import React from 'react'
import { Container } from 'react-bootstrap'
import BootstrapRange from './BootstrapRange';
import ColorScheme from './ColorScheme';
import Nouislider from './Nouislider';
import SizeStyling from './SizeStyling';

const FormRangeSlider = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BootstrapRange />
                <Nouislider />
                <ColorScheme />
                <SizeStyling />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default FormRangeSlider;