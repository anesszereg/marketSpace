import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FloatingLabels } from './FormLayoutsCode';

const FloatLabel = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Floating Labels</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>form-floating</code> class to enable floating labels with Bootstrap’s textual form fields.</p>

                            <Form action="#">
                                <Row className="g-3">
                                    <Col lg={6}>
                                        <div className="form-floating">
                                            <Form.Control type="text" id="firstnamefloatingInput" placeholder="Enter your firstname" />
                                            <Form.Label htmlFor="firstnamefloatingInput">First Name</Form.Label>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="form-floating">
                                            <Form.Control type="text" id="lastnamefloatingInput" placeholder="Enter your Lastname" />
                                            <Form.Label htmlFor="lastnamefloatingInput">Last Name</Form.Label>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="form-floating">
                                            <Form.Control type="email" id="emailfloatingInput" placeholder="Enter your email" />
                                            <Form.Label htmlFor="emailfloatingInput">Email Address</Form.Label>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="form-floating">
                                            <Form.Control type="password" id="passwordfloatingInput" placeholder="Enter your password" />
                                            <Form.Label htmlFor="passwordfloatingInput">Password</Form.Label>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="form-floating">
                                            <Form.Control type="password" id="passwordfloatingInput1" placeholder="Confirm password" />
                                            <Form.Label htmlFor="passwordfloatingInput1">Confirm Password</Form.Label>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="form-floating">
                                            <Form.Control type="text" id="cityfloatingInput" placeholder="Enter your city" />
                                            <Form.Label htmlFor="cityfloatingInput">City</Form.Label>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="form-floating">
                                            <Form.Select id="floatingSelect" aria-label="Floating label select example">
                                                <option defaultValue="">Choose...</option>
                                                <option value="1">USA</option>
                                                <option value="2">Brazil</option>
                                                <option value="3">France</option>
                                                <option value="4">Germany</option>
                                            </Form.Select>
                                            <Form.Label htmlFor="floatingSelect">Country</Form.Label>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="form-floating">
                                            <Form.Control type="number" id="zipfloatingInput" placeholder="Enter your zipcode" />
                                            <Form.Label htmlFor="zipfloatingInput">Zipcode</Form.Label>
                                        </div>
                                    </Col>
                                    <Col lg={1}>
                                        <div className="text-end">
                                            <Button type="button" variant="primary">Submit</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <FloatingLabels />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default FloatLabel;