import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';


import { Radialbar, MultipleRadialbar, CircleRadialbar, GradientCircleRadialbar, StrokedCircleRadial, SemiCircularRadial, ImageRadialbar } from './Radialbar';

const RadialbarChart = () => {
    document.title=" Apex Radialbar Charts | Toner eCommerce + React Admin Template";
    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Radialbar Charts" />

                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Simple Radialbar Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Radialbar dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Multiple Radialbar</h4>
                            </Card.Header>
                            <Card.Body>
                                <MultipleRadialbar dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Circle Chart - Custom Angle</h4>
                            </Card.Header>
                            <Card.Body>
                                <CircleRadialbar dataColors='["--tb-primary", "--tb-info", "--tb-danger", "--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Gradient Circle Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <GradientCircleRadialbar dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Stroked Circle Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <StrokedCircleRadial dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Radialbars with Image</h4>
                            </Card.Header>

                            <Card.Body>
                                <ImageRadialbar dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Semi Circular Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <SemiCircularRadial dataColors='["--tb-primary"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default RadialbarChart;