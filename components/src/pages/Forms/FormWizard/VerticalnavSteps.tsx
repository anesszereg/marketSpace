import React, { useState } from 'react';
import { Card, Col, Form, Nav, Button, Row, Tab } from 'react-bootstrap';


const VerticalnavSteps = () => {

    const [activeVerticalTab, setactiveVerticalTab] = useState<number>(2);

    return (
        <React.Fragment>
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Vertical nav Steps</h4>
                        </Card.Header>
                        <Card.Body className="form-steps">
                            <Form className="vertical-navs-step">
                                <Tab.Container activeKey={activeVerticalTab}>
                                    <Row className="gy-5">
                                        <Col lg={3}>
                                            <Nav as="div" variant="pills" className="nav flex-column custom-nav nav-pills" role="tablist" aria-orientation="vertical">
                                                <Nav.Link as="button" className="nav-link done" eventKey="1" onClick={() => setactiveVerticalTab(1)}>
                                                    <span className="step-title me-2">
                                                        <i className="ri-close-circle-fill step-icon me-2"></i> Step 1
                                                    </span>
                                                    Billing Info
                                                </Nav.Link>
                                                <Nav.Link as="button" className={activeVerticalTab > 2 ? "nav-link done" : "nav-link"} eventKey="2" onClick={() => setactiveVerticalTab(2)}>
                                                    <span className="step-title me-2">
                                                        <i className="ri-close-circle-fill step-icon me-2"></i> Step 2
                                                    </span>
                                                    Address
                                                </Nav.Link>
                                                <Nav.Link as="button" className={activeVerticalTab > 3 ? "nav-link done" : "nav-link"} eventKey="3" onClick={() => setactiveVerticalTab(3)}>
                                                    <span className="step-title me-2">
                                                        <i className="ri-close-circle-fill step-icon me-2"></i> Step 3
                                                    </span>
                                                    Payment
                                                </Nav.Link>
                                                <Nav.Link as="button" className={activeVerticalTab > 4 ? "nav-link done" : "nav-link"} eventKey="4" onClick={() => setactiveVerticalTab(4)}>
                                                    <span className="step-title me-2">
                                                        <i className="ri-close-circle-fill step-icon me-2"></i> Step 4
                                                    </span>
                                                    Finish
                                                </Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="px-lg-4">
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="1">
                                                        <div>
                                                            <h5>Billing Info</h5>
                                                            <p className="text-muted">Fill all information below</p>
                                                        </div>
                                                        <div>
                                                            <Row className="g-3">
                                                                <Col sm={6}>
                                                                    <label htmlFor="firstName" className="form-label">First name</label>
                                                                    <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" defaultValue="" />
                                                                </Col>

                                                                <Col sm={6}>
                                                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                                                    <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" defaultValue="" />
                                                                </Col>

                                                                <div className="col-12">
                                                                    <label htmlFor="username" className="form-label">Username</label>
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">@</span>
                                                                        <input type="text" className="form-control" id="username" placeholder="Username" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12">
                                                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                                                    <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                                                                </div>
                                                            </Row>
                                                        </div>

                                                        <div className="d-flex align-items-start gap-3 mt-4">
                                                            <button type="button" className="btn btn-success btn-label right ms-auto nexttab nexttab" onClick={() => setactiveVerticalTab(2)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to Shipping</button>
                                                        </div>
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="2">
                                                        <div>
                                                            <h5>Shipping Address</h5>
                                                            <p className="text-muted">Fill all information below</p>
                                                        </div>

                                                        <div>
                                                            <Row className="g-3">
                                                                <div className="col-12">
                                                                    <label htmlFor="address" className="form-label">Address</label>
                                                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
                                                                </div>

                                                                <div className="col-12">
                                                                    <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                                                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                                                </div>

                                                                <Col md={5}>
                                                                    <label htmlFor="country" className="form-label">Country</label>
                                                                    <select className="form-select" id="country">
                                                                        <option value="">Choose...</option>
                                                                        <option>United States</option>
                                                                    </select>
                                                                </Col>

                                                                <Col md={4}>
                                                                    <label htmlFor="state" className="form-label">State</label>
                                                                    <select className="form-select" id="state">
                                                                        <option value="">Choose...</option>
                                                                        <option>California</option>
                                                                    </select>
                                                                </Col>

                                                                <Col md={3}>
                                                                    <label htmlFor="zip" className="form-label">Zip</label>
                                                                    <input type="text" className="form-control" id="zip" placeholder="" />
                                                                </Col>
                                                            </Row>

                                                            <hr className="my-4 text-muted" />

                                                            <div className="form-check mb-2">
                                                                <input type="checkbox" className="form-check-input" id="same-address" />
                                                                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                                                            </div>

                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="save-info" />
                                                                <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-start gap-3 mt-4">
                                                            <Button type="button" className="btn btn-light btn-label previestab" onClick={() => setactiveVerticalTab(1)}><i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Back to Billing Info</Button>
                                                            <Button type="button" className="btn btn-success btn-label right ms-auto nexttab nexttab" onClick={() => setactiveVerticalTab(3)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to Payment</Button>
                                                        </div>
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="3">
                                                        <div>
                                                            <h5>Payment</h5>
                                                            <p className="text-muted">Fill all information below</p>
                                                        </div>

                                                        <div>
                                                            <div className="my-3">
                                                                <div className="form-check form-check-inline">
                                                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                                                                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                                                                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                                                                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                                                </div>
                                                            </div>

                                                            <Row className="gy-3">
                                                                <Col md={12}>
                                                                    <label htmlFor="cc-name" className="form-label">Name on card</label>
                                                                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                                                    <small className="text-muted">Full name as displayed on card</small>
                                                                    <div className="invalid-feedback">
                                                                        Name on card is required
                                                                    </div>
                                                                </Col>

                                                                <Col md={6}>
                                                                    <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                                                    <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                                                    <div className="invalid-feedback">
                                                                        Credit card number is required
                                                                    </div>
                                                                </Col>

                                                                <Col md={3}>
                                                                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                                                    <div className="invalid-feedback">
                                                                        Expiration date required
                                                                    </div>
                                                                </Col>

                                                                <Col md={3}>
                                                                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                                                    <div className="invalid-feedback">
                                                                        Security code required
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>

                                                        <div className="d-flex align-items-start gap-3 mt-4">
                                                            <Button type="button" className="btn btn-light btn-label previestab" onClick={() => setactiveVerticalTab(2)}><i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Back to Shipping Info</Button>
                                                            <Button type="button" className="btn btn-success btn-label right ms-auto nexttab nexttab" onClick={() => setactiveVerticalTab(4)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i> Order Complete</Button>
                                                        </div>
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="4">
                                                        <div className="text-center pt-4 pb-2">

                                                            <div className="mb-4">
                                                                {/* <lord-icon src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop" colors="primary:#0ab39c,secondary:#405189" style="width:120px;height:120px"></lord-icon> */}
                                                            </div>
                                                            <h5>Your Order is Completed !</h5>
                                                            <p className="text-muted">You Will receive an order confirmation email with details of your order.</p>
                                                        </div>
                                                    </Tab.Pane>

                                                </Tab.Content>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h5 className="fs-14 text-primary mb-0"><i className="ri-shopping-cart-fill align-middle me-2"></i> Your cart</h5>
                                                <span className="badge bg-danger rounded-pill">3</span>
                                            </div>
                                            <ul className="list-group mb-3">
                                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                                    <div>
                                                        <h6 className="my-0">Product name</h6>
                                                        <small className="text-muted">Brief description</small>
                                                    </div>
                                                    <span className="text-muted">$12</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                                    <div>
                                                        <h6 className="my-0">Second product</h6>
                                                        <small className="text-muted">Brief description</small>
                                                    </div>
                                                    <span className="text-muted">$8</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                                    <div>
                                                        <h6 className="my-0">Third item</h6>
                                                        <small className="text-muted">Brief description</small>
                                                    </div>
                                                    <span className="text-muted">$5</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between bg-light">
                                                    <div className="text-success">
                                                        <h6 className="my-0">Discount code</h6>
                                                        <small>−$5 Discount</small>
                                                    </div>
                                                    <span className="text-success">−$5</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <span>Total (USD)</span>
                                                    <strong>$20</strong>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default VerticalnavSteps;