import React from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import { OverflowExample } from './UiUtilityCode'

const Overflow = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Overflow</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>overflow</code> property on the fly with four default values and classes.</p>
                            <div>
                                <Row>
                                    <Col xl={3} sm={6}>
                                        <div className="mt-4 mt-xl-0">
                                            <h5 className="fs-13">Overflow Auto</h5>

                                            <div className="d-md-flex bg-light">
                                                <div className="overflow-auto p-3 mb-0 bg-light" style={{ height: "100px" }}>
                                                    This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xl={3} sm={6}>
                                        <div className="mt-4 mt-xl-0">
                                            <h5 className="fs-13">Overflow Hidden</h5>

                                            <div className="d-md-flex bg-light">
                                                <div className="overflow-hidden p-3 mb-0 bg-light" style={{ height: "100px" }}>
                                                    This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xl={3} sm={6}>
                                        <div className="mt-4 mt-xl-0">
                                            <h5 className="fs-13">Overflow Visible</h5>

                                            <div className="d-md-flex bg-light">
                                                <div className="overflow-visible p-3 mb-0 bg-light" style={{ height: "100px" }}>
                                                    This is an example of using <code>.overflow-visible</code> on an element with set width and height dimensions.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xl={3} sm={6}>
                                        <div className="mt-4 mt-xl-0">
                                            <h5 className="fs-13">Overflow Scroll</h5>

                                            <div className="d-md-flex bg-light">
                                                <div className="overflow-scroll p-3 mb-0 bg-light" style={{ height: "100px" }}>
                                                    This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <OverflowExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Overflow