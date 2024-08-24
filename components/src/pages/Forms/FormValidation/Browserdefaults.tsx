import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { BrowserDefaults } from './FormValidationCode';

const Browserdefault = () => {
    document.title=" Validation | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Forms" breadcrumbItem="Forms Validation" />
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Browser defaults</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.</p>

                                <Form className="row g-3">
                                    <Col md={4}>
                                        <Form.Label htmlFor="validationDefault01">First name</Form.Label>
                                        <Form.Control type="text" id="validationDefault01" defaultValue="Mark" required />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Label htmlFor="validationDefault02">Last name</Form.Label>
                                        <Form.Control type="text" id="validationDefault02" defaultValue="Otto" required />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Label htmlFor="validationDefaultUsername">Username</Form.Label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                            <Form.Control type="text" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label htmlFor="validationDefault03">City</Form.Label>
                                        <Form.Control type="text" id="validationDefault03" required />
                                    </Col>
                                    <Col md={3}>
                                        <Form.Label htmlFor="validationDefault04">State</Form.Label>
                                        <select className="form-select" id="validationDefault04" defaultValue="Choose..." required >
                                            <option disabled defaultValue="">Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Label htmlFor="validationDefault05">Zip</Form.Label>
                                        <Form.Control type="text" id="validationDefault05" required />
                                    </Col>
                                    <Col className="col-12">
                                        <div className="form-check">
                                            <Form.Check type="checkbox" defaultValue="" id="invalidCheck2" required />
                                            <Form.Label className="form-check-label" htmlFor="invalidCheck2">
                                                Agree to terms and conditions
                                            </Form.Label>
                                        </div>
                                    </Col>
                                    <Col className="col-12">
                                        <Button variant='primary' type="submit">Submit form</Button>
                                    </Col>
                                </Form>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "352px" }}>
                                    <BrowserDefaults />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Browserdefault;