import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { VerticalForm, HorizontalForm } from './FormLayoutsCode';
import Flatpickr from 'react-flatpickr';

const VerticalHorizontal = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Vertical Form</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Example of vertical form using <code>form-control</code> class. No need to specify row and col class to create vertical form.</p>

                            <Form action="#">
                                <div className="mb-3">
                                    <Form.Label htmlFor="employeeName">Employee Name</Form.Label>
                                    <Form.Control type="text" id="employeeName" placeholder="Enter emploree name" />
                                </div>
                                <div className="mb-3">
                                    <Form.Label htmlFor="employeeUrl">Employee Department URL</Form.Label>
                                    <Form.Control type="url" id="employeeUrl" placeholder="Enter emploree url" />
                                </div>
                                <div className="mb-3">
                                    <Form.Label htmlFor="StartleaveDate">Start Leave Date</Form.Label>
                                    <Flatpickr className="form-control" options={{ dateFormat: "d M, Y" }} />
                                </div>
                                <div className="mb-3">
                                    <Form.Label htmlFor="EndleaveDate">End Leave Date</Form.Label>
                                    <Flatpickr className="form-control" options={{ dateFormat: "d M, Y" }} />
                                </div>
                                <div className="mb-3">
                                    <Form.Label htmlFor="VertimeassageInput">Message</Form.Label>
                                    <textarea className="form-control" id="VertimeassageInput" rows={3} placeholder="Enter your message"></textarea>
                                </div>
                                <div className="text-end">
                                    <Button type="submit" variant="primary">Add Leave</Button>
                                </div>
                            </Form>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "375px" }}>
                                <VerticalForm />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Horizontal Form</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Create horizontal forms with the grid by adding the <code>row</code> class to form groups and using the <code>col-*-*</code> class to specify the width of your labels and controls. Be sure to add <code>col-form-label</code> class to your <code>&lt;label&gt;</code>s as well so they’re vertically centered with their associated form controls.</p>

                            <Form action="#">
                                <Row className="mb-3">
                                    <Col lg={3}>
                                        <Form.Label htmlFor="nameInput" >Name</Form.Label>
                                    </Col>
                                    <Col lg={9}>
                                        <Form.Control type="text" id="nameInput" placeholder="Enter your name" />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3}>
                                        <Form.Label htmlFor="websiteUrl">Website URL</Form.Label>
                                    </Col>
                                    <Col lg={9}>
                                        <Form.Control type="url" id="websiteUrl" placeholder="Enter your url" />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3}>
                                        <Form.Label htmlFor="dateInput">Date</Form.Label>
                                    </Col>
                                    <Col lg={9}>
                                        <Flatpickr className="form-control" options={{ dateFormat: "d M, Y" }} />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3}>
                                        <Form.Label htmlFor="timeInput">Time</Form.Label>
                                    </Col>
                                    <Col lg={9}>
                                        <Form.Control type="time" data-provider="timepickr" data-time-basic="true" id="timeInput" />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3}>
                                        <Form.Label htmlFor="leaveemails">Email Id</Form.Label>
                                    </Col>
                                    <Col lg={9}>
                                        <Form.Control type="email" id="leaveemails" placeholder="Enter your email" />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3}>
                                        <Form.Label htmlFor="contactNumber">Contact Number</Form.Label>
                                    </Col>
                                    <Col lg={9}>
                                        <Form.Control type="number" id="contactNumber" placeholder="+91 9876543210" />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={3}>
                                        <Form.Label htmlFor="meassageInput">Message</Form.Label>
                                    </Col>
                                    <Col lg={9}>
                                        <textarea className="form-control" id="meassageInput" rows={3} placeholder="Enter your message"></textarea>
                                    </Col>
                                </Row>
                                <div className="text-end">
                                    <Button type="button" variant="primary">Add Leave</Button>
                                </div>
                            </Form>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "360px" }}>
                                <HorizontalForm />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default VerticalHorizontal;