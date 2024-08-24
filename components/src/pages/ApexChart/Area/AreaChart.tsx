import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user from "assets/images/users/avatar-2.jpg";

import {
    BasicAreaCharts,
    SplineAreaChart,
    AxisChart,
    NegativeAreaChart,
    GithubStyleCharts,
    GithubStyleCharts1,
    StackedAreaChart,
    IrregularAreaCharts,
    AreaNullValueChart
} from "./Area";

const AreaChart = () => {
    document.title=" Apex Area Charts | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Area Charts" />
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Area Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <BasicAreaCharts dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Spline Area Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <SplineAreaChart dataColors='["--tb-primary", "--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Area Chart - Datetime X - Axis Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <div className="toolbar d-flex align-items-start justify-content-center flex-wrap gap-2">
                                        <button type="button" className="btn btn-soft-primary timeline-btn btn-sm" id="one_month">
                                            1M
                                        </button>
                                        <button type="button" className="btn btn-soft-primary timeline-btn btn-sm" id="six_months">
                                            6M
                                        </button>
                                        <button type="button" className="btn btn-soft-primary timeline-btn btn-sm active" id="one_year">
                                            1Y
                                        </button>
                                        <button type="button" className="btn btn-soft-primary timeline-btn btn-sm" id="all">
                                            ALL
                                        </button>
                                    </div>
                                    <AxisChart dataColors='["--tb-info"]' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Area with Negative Values Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <NegativeAreaChart dataColors='["--tb-success", "--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Area Chart - Github Style</h4>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <div className="bg-light">
                                        <GithubStyleCharts dataColors='["--tb-danger"]' />
                                    </div>

                                    <div className="github-style d-flex align-items-center my-2">
                                        <div className="flex-shrink-0 me-2">
                                            <Image className="avatar-sm rounded" src={user} data-hovercard-user-id="634573" alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link to="#" className="font-size-14 text-dark fw-medium">coder</Link>
                                            <div className="cmeta text-muted font-size-11">
                                                <span className="commits text-dark fw-medium"></span> commits
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-light">
                                        <GithubStyleCharts1 dataColors='["--tb-success"]' />
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Stacked Area Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <StackedAreaChart dataColors='["--tb-success", "--tb-info", "--tb-light"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Irregular Timeseries Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <IrregularAreaCharts dataColors='["--tb-primary", "--tb-warning", "--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Area Chart With Null Values Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <AreaNullValueChart dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default AreaChart