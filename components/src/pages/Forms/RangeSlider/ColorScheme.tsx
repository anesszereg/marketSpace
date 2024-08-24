import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';


const ColorScheme = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Color Scheme</h4>
                        </Card.Header>
                        <Card.Body>

                            <Row>
                                <Col xl={4} lg={6}>
                                    <div>
                                        <h5 className="fs-14">Primary</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-color="primary"</code> attribute to set primary color scheme.</p>
                                        <div data-rangeslider data-slider-color="primary"><Form.Range /></div>
                                    </div>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <div className="mt-4 mt-lg-0">
                                        <h5 className="fs-14">Secondary</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-color="secondary"</code> attribute to set secondary color scheme.</p>
                                        <div data-rangeslider data-slider-color="secondary"><Form.Range /></div>
                                    </div>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <div className="mt-4 mt-xl-0">
                                        <h5 className="fs-14">Success</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-color="success"</code> attribute to set success color scheme.</p>
                                        <div data-rangeslider data-slider-color="success"><Form.Range /></div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-4">
                                <Col xl={4} lg={6}>
                                    <div className="mt-4">
                                        <h5 className="fs-14">Info</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-color="info"</code> attribute to set info color scheme.</p>
                                        <div data-rangeslider data-slider-color="info"><Form.Range /></div>
                                    </div>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <div className="mt-4">
                                        <h5 className="fs-14">Warning</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-color="warning"</code> attribute to set warning color scheme.</p>
                                        <div data-rangeslider data-slider-color="warning"><Form.Range /></div>
                                    </div>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <div className="mt-4">
                                        <h5 className="fs-14">Danger</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-color="danger"</code> attribute to set danger color scheme.</p>
                                        <div data-rangeslider data-slider-color="danger"><Form.Range /></div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-4">
                                <Col xl={4} lg={6}>
                                    <div className="mt-4">
                                        <h5 className="fs-14">Dark</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-color="dark"</code> attribute to set dark color scheme.</p>
                                        <div data-rangeslider data-slider-color="dark"><Form.Range /></div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ColorScheme