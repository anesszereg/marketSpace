import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FormGrid, Gutters } from './FormLayoutsCode';

const GridGutters = () => {
    document.title=" Form layout | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Forms" breadcrumbItem="File Upload" />
                <Row>
                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Form Grid</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options. <span className="fw-medium">Requires the <code>$enable-grid-classes</code> Sass variable to be enabled</span> (on by default).</p>

                                <form action="#">
                                    <Row>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="firstNameinput">First Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your firstname" id="firstNameinput" />
                                            </div>
                                        </Col>

                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="lastNameinput">Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your lastname" id="lastNameinput" />
                                            </div>
                                        </Col>

                                        <Col md={12}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="compnayNameinput">Company Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter company name" id="compnayNameinput" />
                                            </div>
                                        </Col>

                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="phonenumberInput">Phone Number</Form.Label>
                                                <Form.Control type="tel" placeholder="+(245) 451 45123" id="phonenumberInput" />
                                            </div>
                                        </Col>

                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="emailidInput">Email Address</Form.Label>
                                                <Form.Control type="email" placeholder="example@gamil.com" id="emailidInput" />
                                            </div>
                                        </Col>

                                        <Col md={12}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="address1ControlTextarea">Address</Form.Label>
                                                <Form.Control type="text" placeholder="Address 1" id="address1ControlTextarea" />
                                            </div>
                                        </Col>

                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="citynameInput">City</Form.Label>
                                                <Form.Control type="email" placeholder="Enter your city" id="citynameInput" />
                                            </div>
                                        </Col>

                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="ForminputState">State</Form.Label>
                                                <Form.Select id="ForminputState" data-choices data-choices-sorting="true">
                                                    <option defaultValue="">Choose...</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="text-end">
                                                <Button type="submit" variant="primary">Submit</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "375px" }}>
                                    <FormGrid />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Gutters</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">By adding <a href="/docs/5.1/layout/gutters/" className="text-decoration-underline">gutter modifier classes</a>, you can have control over the gutter width in as well the inline as block direction. <span className="fw-medium">Also requires the <code>$enable-grid-classes</code> Sass variable to be enabled</span> (on by default).</p>

                                <Form action="#" className="row g-3">
                                    <Col md={12}>
                                        <Form.Label htmlFor="fullnameInput">Name</Form.Label>
                                        <Form.Control type="text" id="fullnameInput" placeholder="Enter your name" />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label htmlFor="inputEmail4">Email</Form.Label>
                                        <Form.Control type="email" id="inputEmail4" placeholder="admin@Themesdesign.com" />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label htmlFor="inputPassword4">Password</Form.Label>
                                        <Form.Control type="password" id="inputPassword4" placeholder="Password" />
                                    </Col>
                                    <Col className="col-12">
                                        <Form.Label htmlFor="inputAddress">Address</Form.Label>
                                        <Form.Control type="text" id="inputAddress" placeholder="1234 Main St" />
                                    </Col>
                                    <Col className="col-12">
                                        <Form.Label htmlFor="inputAddress2">Address 2</Form.Label>
                                        <Form.Control type="text" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label htmlFor="inputCity">City</Form.Label>
                                        <Form.Control type="text" id="inputCity" placeholder="Enter your city" />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Label htmlFor="inputState">State</Form.Label>
                                        <Form.Select id="inputState" data-choices data-choices-sorting="true">
                                            <option defaultValue="">Choose...</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={2}>
                                        <Form.Label htmlFor="inputZip">Zip</Form.Label>
                                        <Form.Control type="text" id="inputZip" placeholder="Zin code" />
                                    </Col>
                                    <Col className="col-12">
                                        <div className="form-check">
                                            <Form.Check type="checkbox" id="gridCheck" />
                                            <Form.Label className="form-check-label" htmlFor="gridCheck">
                                                Check me out
                                            </Form.Label>
                                        </div>
                                    </Col>
                                    <Col className="col-12">
                                        <div className="text-end">
                                            <Button type="button" variant="primary">Sign in</Button>
                                        </div>
                                    </Col>
                                </Form>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "338px" }}>
                                    <Gutters />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
        </React.Fragment>
    )
}

export default GridGutters;