import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';


const SizeStyling = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Sizes</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={4} lg={6}>
                                    <div>
                                        <h5 className="fs-14">Large</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-size="lg"</code> attribute to set large size rangeslider.</p>
                                        <div data-rangeslider data-slider-size="lg"><Form.Range /></div>
                                    </div>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <div className="mt-4 mt-lg-0">
                                        <h5 className="fs-14">Medium</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-size="md"</code> attribute to set medium size data-rangeslider.</p>
                                        <div data-rangeslider data-slider-size="md"><Form.Range /></div>
                                    </div>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <div className="mt-4 mt-xl-0">
                                        <h5 className="fs-14">Small</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-size="sm"</code> attribute to set small size rangeslider.</p>
                                        <div data-rangeslider data-slider-size="sm"><Form.Range /></div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Styling</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col lg={6}>
                                    <div>
                                        <h5 className="fs-14">Line Rangeslider</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-style="line"</code> attribute to set line rangeslider.</p>
                                        <div data-rangeslider data-slider-style="line"><Form.Range /></div>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="mt-4 mt-lg-0">
                                        <h5 className="fs-14">Circle Bordered Rangeslider</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-style="border"</code> attribute to set circle bordered rangeslider.</p>
                                        <div data-rangeslider data-slider-style="border"><Form.Range /></div>
                                    </div>
                                </Col>

                                <Row className="mt-4">
                                    <Col lg={6}>
                                        <div className="mt-4">
                                            <h5 className="fs-14">Square Rangeslider</h5>
                                            <p className="text-muted mb-4">Use <code>data-slider-style="square"</code> attribute to set square shape rangeslider.</p>
                                            <div data-rangeslider data-slider-style="square"><Form.Range /></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SizeStyling