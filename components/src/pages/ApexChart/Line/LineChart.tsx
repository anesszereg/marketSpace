import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';

import {Lines,
    ZoomableTimeseries,
    LinewithDataLabels,
    DashedLine,
    LinewithAnnotations,
    BrushChart,
    BrushChart1,
    SteplineChart,
    GradientCharts,
    MissingData,
    ChartSyncingLine,
    ChartSyncingLine2,
    ChartSyncingArea} from './Line';

const LineChart = () => {
    document.title=" Apex Line Charts | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Line Charts" />
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Line Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <Lines dataColors='["--tb-primary"]' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Zoomable Timeseries</h4>
                            </Card.Header>
                            <Card.Body>
                                <ZoomableTimeseries dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Line with Data Labels</h4>
                            </Card.Header>
                            <Card.Body>
                                <LinewithDataLabels dataColors='["--tb-primary", "--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Dashed Line</h4>
                            </Card.Header>
                            <Card.Body>
                                <DashedLine dataColors='["--tb-primary", "--tb-danger", "--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Line with Annotations</h4>
                            </Card.Header>
                            <Card.Body>
                                <LinewithAnnotations dataColors='["--tb-primary"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Brush Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <BrushChart dataColors='["--tb-danger"]' />
                                </div>
                                <div>
                                    <BrushChart1 dataColors='["--tb-info"]' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Stepline Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <SteplineChart dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Gradient Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <GradientCharts dataColors='["--tb-success"]' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Missing Data/ Null Value Charts</h4>
                            </Card.Header>
                            <Card.Body>
                                <MissingData dataColors='["--tb-primary", "--tb-danger", "--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Syncing Charts</h4>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <ChartSyncingLine dataColors='["--tb-primary"]' className="apex-charts" dir="ltr" />
                                    <ChartSyncingLine2 dataColors='["--tb-warning"]' className="apex-charts" dir="ltr" />
                                    <ChartSyncingArea dataColors='["--tb-success"]' className="apex-charts" dir="ltr" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default LineChart;