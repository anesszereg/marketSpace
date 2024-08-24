import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { ColumnSizing } from './FormLayoutsCode';

const ColumnSize = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Column Sizing</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>col-sm-</code> class with required size value to set column size as per your requirement.</p>

                            <Row className="g-3">
                                <Col sm={6}>
                                    <Form.Control type="text" placeholder="Firstname" aria-label="First-Name" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Control type="text" placeholder="Lastname" aria-label="Last-Name" />
                                </Col>
                                <Col sm={4}>
                                    <Form.Control type="text" placeholder="Email id" aria-label="admin@Themesdesign.com" />
                                </Col>
                                <Col sm={4}>
                                    <Form.Control type="password" placeholder="Password" aria-label="Password" />
                                </Col>
                                <Col sm={4}>
                                    <Form.Control type="password" placeholder="Confirm Password" aria-label="confirm-password" />
                                </Col>
                                <Col sm={7}>
                                    <Form.Control type="text" placeholder="City" aria-label="City" />
                                </Col>
                                <div className="col-sm">
                                    <Form.Control type="text" placeholder="State" aria-label="State" />
                                </div>
                                <div className="col-sm">
                                    <Form.Control type="text" placeholder="Zip" aria-label="Zip" />
                                </div>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <ColumnSizing />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ColumnSize;