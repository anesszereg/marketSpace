import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { VerticalStartExample, VerticalCenterExample, VerticalEndExample } from './UiGridCode';

const Verticalalignment = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Vertical alignment (align-items-start)</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>align-items-start</code> class to vertically align-items at the start.</p>
                            <div className="bg-light p-3 text-center">
                                <Row className="align-items-start" style={{ minHeight: "6rem" }}>
                                    <Col sm={4}>
                                        <div className="bg-primary-subtle text-primary rounded p-2">
                                            col-sm-4
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                            col-sm-4
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                            col-sm-4
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
                                <VerticalStartExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Vertical alignment (align-items-center)</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>align-items-center</code> class to vertically align-items at the center.</p>

                            <div className="bg-light p-3 text-center">
                                <Row className="align-items-center" style={{ minHeight: "6rem" }}>
                                    <Col sm={4}>
                                        <div className="bg-primary-subtle text-primary rounded p-2">
                                            col-sm-4
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                            col-sm-4
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                            col-sm-4
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
                                <VerticalCenterExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Vertical alignment (align-items-end)</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>align-items-end</code> class to vertically align-items at the end.</p>
                            <div className="bg-light p-3 text-center">
                                <Row className="align-items-end" style={{ minHeight: "6rem" }}>
                                    <Col sm={4}>
                                        <div className="bg-primary-subtle text-primary rounded p-2">
                                            col-sm-4
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                            col-sm-4
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                            col-sm-4
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
                                <VerticalEndExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Verticalalignment