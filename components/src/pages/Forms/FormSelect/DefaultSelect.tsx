import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { DefaultSelect } from './FormSelectCode';

const DefaultSelects = () => {
    document.title=" Form Select | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Forms" breadcrumbItem="Form Select" />

                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header className="align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">Default Select</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>&lt;select&gt;</code> attribute with numerous options to show value with choice's option.</p>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Select className="mb-3" aria-label="Default select example">
                                            <option defaultValue="Select your Status">Select your Status </option>
                                            <option value="1">Declined Payment</option>
                                            <option value="2">Delivery Error</option>
                                            <option value="3">Wrong Amount</option>
                                        </Form.Select>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Select className="rounded-pill mb-3" aria-label="Default select example">
                                            <option defaultValue="Search for services">Search for services</option>
                                            <option value="1">Information Architecture</option>
                                            <option value="2">UI/UX Design</option>
                                            <option value="3">Back End Development</option>
                                        </Form.Select>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Select aria-label="Disabled select example" disabled>
                                            <option defaultValue="Open this select menu (Disabled)">Open this select menu (Disabled)</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "250px" }}>
                                    <DefaultSelect />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default DefaultSelects;