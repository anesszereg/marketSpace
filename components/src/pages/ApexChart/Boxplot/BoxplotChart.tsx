import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';

import {
    Boxplot,
    Scatter,
    Horizontal
} from './Boxplot'

const BoxplotChart = () => {
    document.title = " Apex Boxplot Charts | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Boxplot Charts" />
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Box Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Boxplot dataColors='["--tb-primary", "--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Boxplot with Scatter Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Scatter dataColors='["--tb-danger", "--tb-info", "--tb-danger", "--tb-primary"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Horizontal BoxPlot</h4>
                            </Card.Header>
                            <Card.Body>
                            <Horizontal dataColors='["--tb-light", "--tb-dark"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default BoxplotChart