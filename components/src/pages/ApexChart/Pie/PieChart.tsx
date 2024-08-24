import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';

import { SimplePie, SimpleDonut, UpdateDonut, MonochromePie, GradientDonut, PatternedDonut, ImagePieChart } from './Pie';

const PieChart = () => {
    document.title=" Apex Pie Charts | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Pie Charts" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Simple Pie Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <SimplePie dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Simple Donut Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <SimpleDonut dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>


                <Row className="row">
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Updating Donut Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <UpdateDonut dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]' />
                                    <div className="d-flex align-items-start flex-wrap gap-2 justify-content-center mt-4">
                                        <button id="add" className="btn btn-light btn-sm">
                                            + ADD
                                        </button>

                                        <button id="remove" className="btn btn-light btn-sm">
                                            - REMOVE
                                        </button>

                                        <button id="randomize" className="btn btn-light btn-sm">
                                            RANDOMIZE
                                        </button>

                                        <button id="reset" className="btn btn-light btn-sm">
                                            RESET
                                        </button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Monochrome Pie Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <MonochromePie dataColors='["--tb-primary"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Gradient Donut Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <GradientDonut dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Patterned Donut Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <PatternedDonut dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Pie Chart with Image Fill</h4>
                            </Card.Header>

                            <Card.Body>
                                <ImagePieChart dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default PieChart;