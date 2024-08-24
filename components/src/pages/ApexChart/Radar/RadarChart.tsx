import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';

import { Radar, MultipleRadar, PolygonRadar } from './Radar';

const RadarChart = () => {
    document.title=" Apex Radar Charts | Toner eCommerce + React Admin Template";

  return (
    <React.Fragment>
        <div className="page">
        <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Radar Charts" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Radar Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <Radar dataColors='["--tb-success"]'/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Radar Chart - Multiple series</h4>
                            </Card.Header>
                            <Card.Body>
                                <MultipleRadar dataColors='["--tb-danger", "--tb-success", "--tb-primary"]'/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Radar Chart - Polygon Fill</h4>
                            </Card.Header>
                            <Card.Body>
                                <PolygonRadar dataColors='["--tb-info"]'/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </div>
    </React.Fragment>
  )
}

export default RadarChart;