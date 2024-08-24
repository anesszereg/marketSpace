import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';


import {
    Bubble,
    ThreeDBubble
} from './Bubbles'

const BubbleChart = () => {
    document.title=" Apex Bubble Charts | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Bubble Charts" />
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Candlestick Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Bubble dataColors='["--tb-primary", "--tb-info", "--tb-warning", "--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">3D Bubble Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <ThreeDBubble dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default BubbleChart