import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';


import {
    Mixed,
    Yaxis,
    Area,
    LineColumnArea
} from './Mixed'

const MixedChart = () => {
    document.title=" Apex Mixed Charts | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Mixed Charts" />
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Line & Column Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Mixed dataColors='["--tb-primary", "--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Multiple Y-Axis Charts</h4>
                            </Card.Header>
                            <Card.Body>
                                <Yaxis dataColors='["--tb-primary", "--tb-info", "--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Line & Area Charts</h4>
                            </Card.Header>
                            <Card.Body>
                                <Area dataColors='["--tb-primary", "--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Line, Column & Area Charts</h4>
                            </Card.Header>
                            <Card.Body>
                                <LineColumnArea dataColors='["--tb-primary", "--tb-success", "--tb-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default MixedChart