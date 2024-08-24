import React from 'react';
import { Card, Col, Form, Row, InputGroup } from 'react-bootstrap';
import { InputGroupSizing } from './BasicElementCode';

const InputGroupSizings = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Input Group Sizing</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>input-group-sm</code> class to set a small size input group and <code>input-group-lg</code> class to input-group class to set a large size input group respectively. no such class is required for a default size input group.</p>
                            <Row className="align-items-center g-3">
                                <Col lg={4}>
                                    <InputGroup className="input-group-sm">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                                        <Form.Control type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                </Col>
                                <Col lg={4}>
                                    <InputGroup>
                                        <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
                                        <Form.Control type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                    </InputGroup>
                                </Col>
                                <Col lg={4}>
                                    <InputGroup className="input-group-lg">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
                                        <Form.Control type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <InputGroupSizing />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default InputGroupSizings;