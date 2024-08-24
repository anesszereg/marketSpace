import React from 'react';
import { Card, Col, Form, Row, InputGroup } from 'react-bootstrap';
import { MultipleInputs } from './BasicElementCode';

const MultipleInput = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Multiple Inputs</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">While multiple <code>&lt;input&gt;</code>s are supported visually, validation styles are only available for input groups with a single <code>&lt;input&gt;</code>.</p>
                            <div>
                                <InputGroup className="mb-3">
                                    <span className="input-group-text">First and last name</span>
                                    <Form.Control type="text" aria-label="First name" />
                                    <Form.Control type="text" aria-label="Last name" />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <span className="input-group-text">$</span>
                                    <span className="input-group-text">0.00</span>
                                    <Form.Control type="text" aria-label="Dollar amount (with dot and two decimal places)" />
                                </InputGroup>

                                <InputGroup>
                                    <Form.Control type="text" aria-label="Dollar amount (with dot and two decimal places)" />
                                    <span className="input-group-text">$</span>
                                    <span className="input-group-text">0.00</span>
                                </InputGroup>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <MultipleInputs />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default MultipleInput