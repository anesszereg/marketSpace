import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { HorizontalAlignExample } from './UiGridCode';

const HorizontalAlignment = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Horizontal Alignment</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use the <code>justify-content-start</code>,<code>justify-content-center</code>, or <code>justify-content-end</code> class respectively to horizontally align items with a different position.</p>
                            <div className="bg-light p-3 text-center">
                                <Row className="justify-content-start">
                                    <Col sm={4}>
                                        <div className="bg-primary-subtle text-primary rounded p-2">
                                            justify-content-start
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col sm={4}>
                                        <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                            justify-content-center
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="justify-content-end">
                                    <Col sm={4}>
                                        <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                            justify-content-end
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
                                <HorizontalAlignExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default HorizontalAlignment