import React from 'react';
import { Container } from 'react-bootstrap';
import ComponentOverview from './ComponentOverview';
import BootstrapUI from './BootstrapUI';
import AdvanceUI from './AdvanceUI';
import CustomUI from './CustomUI';
import Form from './Form';
import ApexCharts from './ApexCharts';
import DesignGraphics from './Design&Graphics';
import Tables from './Tables';
import Map from './Map';

const Overview = () => {
    return (
        <div className="page-content">
            <Container fluid>
                <ComponentOverview />
                <BootstrapUI />
                <AdvanceUI />
                <CustomUI />
                <Form />
                <ApexCharts />
                <DesignGraphics />
                <Tables />
                <Map />
            </Container>
        </div>
    );
}

export default Overview;