import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { AlignSelfExample } from './UiGridCode';


const AlignSelf = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Align Self</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use the <code>align-self-start</code>,<code>align-self-center</code>, or <code>align-self-end</code> class respectively to vertically align items with a different position.</p>

                            <div className="bg-light p-3 text-center">
                                <Row className="g-2" style={{ minHeight: "9rem" }}>
                                    <Col sm={4} className="align-self-start">
                                        <div className="bg-primary-subtle text-primary rounded p-2">
                                            align-self-start
                                        </div>
                                    </Col>
                                    <Col sm={4} className="align-self-center">
                                        <div className="bg-primary-subtle text-primary rounded p-2">
                                            align-self-center
                                        </div>
                                    </Col>
                                    <Col sm={4} className="align-self-end">
                                        <div className="bg-primary-subtle text-primary rounded p-2">
                                            align-self-end
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
                                <AlignSelfExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AlignSelf;