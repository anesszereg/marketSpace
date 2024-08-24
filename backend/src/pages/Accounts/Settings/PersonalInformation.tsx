import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Flatpickr from "react-flatpickr";

const PersonalInformation = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={4}>
                    <h5 className="fs-16">Personal Information</h5>
                    <p className="text-muted mb-lg-0">Personal Identifiable Information (PII) is defined as: Any representation of information that permits the identity of an individual to whom the information applies to be reasonably inferred by either direct or indirect means.</p>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Card.Body>
                            <Row className="g-3">
                                <Col lg={6}>
                                    <div>
                                        <Form.Label htmlFor="firstName">First Name <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="firstName" placeholder="Enter your first name" defaultValue="Raquel"/>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="lastName">Last Name <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="lastName" placeholder="Enter your last name" defaultValue="Murillo"/>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="emailInput">Email Address <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="emailInput" placeholder="name@toner.com" defaultValue="raquel@toner.com"/>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="phoneInput">Phone Number</Form.Label>
                                        <Form.Control type="text" id="phoneInput" placeholder="Enter phone number" defaultValue="+(235) 01234 5678"/>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="birdthdatInput">Joining Date</Form.Label>
                                        <Flatpickr
                                            className="form-control flatpickr-input"
                                            placeholder='Select Date'
                                            options={{
                                                mode: "range",
                                                dateFormat: "d M, Y",
                                                defaultDate: "24 Nov, 2021"
                                            }}
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <Form.Label htmlFor="designationInput">Designation</Form.Label>
                                        <Form.Control type="text" id="designationInput" placeholder="Designation" defaultValue="Sales & Marketing Manager"/>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <Form.Label htmlFor="websiteInput1">Website</Form.Label>
                                        <Form.Control type="text" id="websiteInput1" placeholder="www.example.com" defaultValue="www.toner.com"/>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="cityInput">City</Form.Label>
                                        <Form.Control type="text" id="cityInput" placeholder="City" defaultValue="Phoenix"/>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="countryInput">Country</Form.Label>
                                        <Form.Control type="text" id="countryInput" placeholder="Country" defaultValue="United States"/>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="zipcodeInput">Zip Code</Form.Label>
                                        <Form.Control type="text" id="zipcodeInput" placeholder="Enter zipcode" defaultValue="90011"/>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="text-end">
                                        <Button variant='secondary' type="submit">Update Profile</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default PersonalInformation;