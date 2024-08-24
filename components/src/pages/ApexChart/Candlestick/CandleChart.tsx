import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';

import {
    Candle,
    ComboCandlestick,
    ComboCandlestick1,
    Category,
    CandlestickLine
} from './Candlestick'

const CandleChart = () => {
    document.title=" Apex Canlestick Charts | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Candlestick Chart" />
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Candlestick Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Candle dataColors='["--tb-success", "--tb-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Candlestick Synced with Brush Chart (Combo)</h4>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <div id="combo_candlestick">
                                        <ComboCandlestick dataColors='["--tb-info", "--tb-danger"]' />
                                    </div>
                                    <div id="combo_candlestick_chart">
                                        <ComboCandlestick1 dataColors='["--tb-warning", "--tb-danger"]' />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Category X-Axis</h4>
                            </Card.Header>
                            <Card.Body>
                                <Category dataColors='["--tb-success", "--tb-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Candlestick with line</h4>
                            </Card.Header>

                            <Card.Body>
                                <CandlestickLine dataColors='["--tb-success", "--tb-danger", "--tb-info", "--tb-warning"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default CandleChart