import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { SelectSize } from './FormSelectCode';

const Selectsizes = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Select Size</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>form-select-sm</code> class to set small select size and <code>form-select-lg</code> class to form-select class to set large select size. No such class is required for default select size.</p>
                            <div className="row align-items-center g-3">
                                <Col lg={4}>
                                    <Form.Select className="form-select-sm" aria-label=".form-select-sm example">
                                        <option defaultValue="Open this select menu">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col lg={4}>
                                    <Form.Select aria-label=".form-select-sm example">
                                        <option defaultValue="Open this select menu">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col lg={4}>
                                    <Form.Select className="form-select-lg" aria-label=".form-select-lg example">
                                        <option defaultValue="Open this select menu">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <SelectSize />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Selectsizes;