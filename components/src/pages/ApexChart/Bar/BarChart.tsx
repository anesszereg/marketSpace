import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';

import {
    Bar,
    CustomDataLabel,
    Stacked,
    Stacked2,
    Negative,
    Markers,
    Reversed,
    Patterned,
    Groupes,
    BarwithImages
} from './Bar';

const BarChart = () => {
    document.title = " Apex Bar Charts | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Bar Charts" />
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Bar Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Bar dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Custom DataLabels Bar</h4>
                            </Card.Header>
                            <Card.Body>
                                <CustomDataLabel dataColors='["--tb-primary", "--tb-secondary", "--tb-success", "--tb-info", "--tb-warning", "--tb-danger", "--tb-dark", "--tb-primary", "--tb-success", "--tb-secondary"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Stacked Bar Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Stacked dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Stacked Bars 100</h4>
                            </Card.Header>
                            <Card.Body>
                                <Stacked2 dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Bar with Negative Values</h4>
                            </Card.Header>
                            <Card.Body>
                                <Negative dataColors='["--tb-primary", "--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Bar with Markers</h4>
                            </Card.Header>
                            <Card.Body>
                                <Markers dataColors='["--tb-success", "--tb-primary"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Reversed Bar Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Reversed dataColors='["--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Patterned Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Patterned dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Grouped Bar Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Groupes dataColors='["--tb-primary", "--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Bar with Images</h4>
                            </Card.Header>
                            <Card.Body>
                                <BarwithImages />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default BarChart;