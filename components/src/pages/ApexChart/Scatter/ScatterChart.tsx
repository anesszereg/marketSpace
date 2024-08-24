import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';

import {
    Scatter,
    Datetime,
    ImagesChart
} from './Scatter'


const ScatterChart = () => {
    document.title=" Apex Scatter Charts | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Scatter Charts" />

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Scatter Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Scatter dataColors='["--tb-primary", "--tb-success", "--tb-warning"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Scatter - Datetime Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Datetime dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-warning", "--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Scatter Images Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <ImagesChart dataColors='["--tb-primary", "--tb-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default ScatterChart;