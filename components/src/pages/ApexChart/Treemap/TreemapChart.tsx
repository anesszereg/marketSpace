import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';

import { Treemap, MultiTreemap, DiffColorTreemap, ColorRangeTreemap } from './Treemap'

const TreemapChart = () => {
    document.title = " Apex Treemap Charts | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Treemap Charts" />

                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Treemap Charts</h4>
                            </Card.Header>

                            <Card.Body>
                                <Treemap dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Multi-Dimensional Treemap Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <MultiTreemap dataColors='["--tb-primary","--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Distributed Treemap Chart (Different Color for  each Cell)</h4>
                            </Card.Header>

                            <Card.Body>
                                <DiffColorTreemap dataColors='["--tb-primary", "--tb-secondary", "--tb-success", "--tb-info","--tb-warning", "--tb-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Treemap Chart with Color Ranges</h4>
                            </Card.Header>
                            <Card.Body>
                                <ColorRangeTreemap dataColors='["--tb-info","--tb-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default TreemapChart;