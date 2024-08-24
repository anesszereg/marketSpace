import React from "react";
import { Card, Col, Container, Row, Tabs, Tab, Alert, Button, Form } from "react-bootstrap";
import { Shoporder } from "Components/ShopTopBar";

const Payment = () => {
    document.title = "payment | Toner - React FrontEnd";
    return (
        <React.Fragment>
            <section className="section pb-4">
                <Container>
                    <Row >
                        <Col lg={12}>
                            <Alert className="alert-danger text-center text-capitalize mb-4 fs-14">
                                save up to <b>30%</b> to <b>40%</b> off omg! just look at the <b>great deals</b>!
                            </Alert>
                        </Col>
                    </Row>
                    <Row className="product-list">
                        <Col xl={8}>
                            <h5 className="mb-0 flex-grow-1">Payment Selection</h5>
                            <Tabs
                                defaultActiveKey="paypal"
                                transition={false}
                                className="mb-3 nav nav-pills arrow-navtabs nav-success bg-light mb-3 mt-4 nav-justified custom-nav"
                            >
                                <Tab as="a" eventKey="paypal" title="paypal" >
                                    <Card>
                                        <Card.Body>
                                            <Row className="gy-3">
                                                <Col md={12}>
                                                    <Form.Label htmlFor="buyers-name" className="text-muted">Buyers First Name</Form.Label>
                                                    <Form.Control type="text" id="buyers-name" placeholder="Enter Name" />
                                                </Col>

                                                <Col md={6}>
                                                    <Form.Label htmlFor="buyers-last" className="text-muted">Buyers Last Name</Form.Label>
                                                    <Form.Control type="text" id="buyers-last" placeholder="Enter Last Name" />
                                                </Col>

                                                <Col md={6}>
                                                    <Form.Label htmlFor="buyers-address" className="text-muted">Email Address</Form.Label>
                                                    <Form.Control type="text" id="buyers-address" placeholder="Enter Email Address" />
                                                </Col>

                                                <Col md={12}>
                                                    <Form.Label className="text-muted">Select your paypal account type</Form.Label>
                                                    <div className="d-flex gap-4 mt-1">
                                                        <Form.Check type="radio" label="Domestic" name="formRadios" id="formRadios1" className="form-Check-input" defaultChecked />
                                                        <Form.Check type="radio" label="International" name="formRadios" id="formRadios2" className="form-Check-input" />
                                                    </div>
                                                </Col>
                                            </Row>

                                            <div className="hstack gap-2 justify-content-end pt-4">
                                                <Button variant="primary" className="btn btn-hover"><i className="ri-paypal-fill align-bottom align-bottom pe-2"></i> Log into my Paypal</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Tab>
                                <Tab as="a" eventKey="credit" title="credit">
                                    <Card>
                                        <Card.Body>
                                            <Row className="gy-3">
                                                <Col md={12}>
                                                    <Form.Label htmlFor="cc-name" className="text-muted">Name on card</Form.Label>
                                                    <Form.Control type="text" id="cc-name" placeholder="Enter name" />
                                                    <small className="text-muted">Full name as displayed on card</small>
                                                </Col>

                                                <Col md={6}>
                                                    <Form.Label htmlFor="cc-number" className="text-muted">Credit card number</Form.Label>
                                                    <Form.Control type="text" id="cc-number" placeholder="xxxx xxxx xxxx xxxx" />
                                                </Col>

                                                <Col md={3}>
                                                    <Form.Label htmlFor="cc-expiration" className="text-muted">Expiration</Form.Label>
                                                    <Form.Control type="text" id="cc-expiration" placeholder="MM/YY" />
                                                </Col>

                                                <Col md={3}>
                                                    <Form.Label htmlFor="cc-cvv" className="text-muted">CVV</Form.Label>
                                                    <Form.Control type="text" id="cc-cvv" placeholder="xxx" />
                                                </Col>
                                            </Row>

                                            <div className="hstack gap-2 justify-content-end pt-4">
                                                <Button variant="primary" className="btn btn-hover w-md">Pay<i className="ri-logout-box-r-line align-bottom ms-2"></i></Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Tab>
                                <Tab eventKey="cash" title="Cash on Delivery">
                                    <Card>
                                        <Card.Body>
                                            <div className="text-center py-3">
                                                <div className="avatar-md mx-auto mb-4">
                                                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle display-6">
                                                        <i className="bi bi-cash"></i>
                                                    </div>
                                                </div>
                                                <h5 className="fs-16 mb-3">Cash on Delivery</h5>
                                                <p className="text-muted mt-3 mb-0 w-75 mx-auto">Integer vulputate metus eget purus maximus porttitor. Maecenas ut porta justo.
                                                    Donec finibus nec nibh ut urna viverra semper.</p>
                                            </div>
                                            <div className="hstack gap-2 justify-content-end pt-3">
                                                <Button variant="primary" className="btn btn-hover w-md">Continue<i className="ri-logout-box-r-line align-bottom ms-2"></i></Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Tab>
                            </Tabs>

                        </Col>
                        <Col lg={4}>
                            <Shoporder />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Payment;