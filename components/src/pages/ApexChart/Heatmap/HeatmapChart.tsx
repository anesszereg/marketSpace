import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';

import {
    Heatmap,
    MultipleHeatmap,
    ColorRange,
    RangeWithoutShades
} from './Heatmap';

const HeatmapChart = () => {
    document.title=" Apex Heatmap    Charts | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Heatmap Charts" />

                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Heatmap Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <div className="live-preview">
                                    <Heatmap dataColors='["--tb-success"]' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Heatmap - Multiple Series</h4>
                            </Card.Header>

                            <Card.Body>
                                <MultipleHeatmap dataColors='["--tb-primary", "--tb-secondary", "--tb-success", "--tb-info", "--tb-warning", "--tb-danger", "--tb-dark", "--tb-primary", "--tb-card-custom"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                <Row>
                    <Col xl={6}>
                        <Card>
                            <div className="card-header">
                                <h4 className="card-title mb-0">Heatmap Color Range</h4>
                            </div>

                            <div className="card-body">
                                <ColorRange dataColors='["--tb-info", "--tb-success", "--tb-primary", "--tb-warning"]' />
                            </div>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <div className="card-header">
                                <h4 className="card-title mb-0">Heatmap - Range Without Shades</h4>
                            </div>

                            <div className="card-body">
                                <RangeWithoutShades dataColors='["--tb-info", "--tb-primary"]' />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default HeatmapChart;