import React, { useState } from 'react';
import { Button, Card, Col, Row, Image, Modal, Alert, Form } from 'react-bootstrap';

// import Images
import loginImg from "assets/images/modals/login.png"
import signupImg from "assets/images/modals/signup.png"
import subscribeImg from "assets/images/modals/subscribe.png"
import paymentImg from "assets/images/modals/success-payment.png"
import { Link } from 'react-router-dom';

import Success from 'assets/images/Gifs/1103-confetti-lineal.gif'
import Back from 'assets/images/profile-bg.jpg'

const CustomModalsExample = () => {
    // Custom Modals Example
    const [modal_successMessage, setmodal_successMessage] = useState<boolean>(false);
    function tog_successMessage() {
        setmodal_successMessage(!modal_successMessage);
    }

    const [modal_loginModals, setmodal_loginModals] = useState<boolean>(false);
    function tog_loginModals() {
        setmodal_loginModals(!modal_loginModals);
    }

    const [subscribeModals, set_subscribeModals] = useState<boolean>(false);
    function tog_subscribeModals() {
        set_subscribeModals(!subscribeModals);
    }

    const [modal_signUpModals, setmodal_signUpModals] = useState<boolean>(false);
    function tog_signUpModals() {
        setmodal_signUpModals(!modal_signUpModals);
    }
    return (
        <React.Fragment>
            <Row className="mt-2">
                <Col lg={12}>
                    <div className="justify-content-between d-flex align-items-center mb-3">
                        <h5 className="mb-0 pb-1 text-decoration-underline">Custom Modals Example</h5>
                    </div>
                    <Row>
                        <Col xl={4} md={6}>
                            <Card className="text-center border">
                                <Card.Body className="p-4 pb-0">
                                    <h5 className="mb-4">Success Message</h5>
                                    <p className="text-muted">Here is an example of a sweet alert with a success message.</p>
                                    <div>
                                        <Button variant="primary" data-bs-toggle="modal" data-bs-target="#success-Payment" onClick={() => tog_successMessage()} >Click me</Button>
                                    </div>

                                    <Row className="justify-content-center mt-2">
                                        <Col lg={10}>
                                            <div>
                                                <Image src={paymentImg} alt="Mac" className="img-fluid" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={4} md={6}>
                            <Card className="text-center border">
                                <Card.Body className="p-4 pb-0">
                                    <h5 className="mb-4">Login Modals</h5>
                                    <p className="text-muted">Here is an example of a sweet alert with a error message.</p>
                                    <div>
                                        <Button variant='primary' onClick={() => tog_loginModals()} data-bs-toggle="modal" data-bs-target="#loginModals">Click me</Button>
                                    </div>

                                    <Row className="justify-content-center mt-2">
                                        <Col lg={10}>
                                            <div>
                                                <Image src={loginImg} alt="Mac" className="img-fluid" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={4} md={6}>
                            <Card className="text-center border">
                                <Card.Body className="p-4 pb-0">
                                    <h5 className="mb-4">Subscribe Modals</h5>
                                    <p className="text-muted">Here is an example of a sweet alert with a warning message.</p>
                                    <div>
                                        <Button variant='primary' onClick={() => tog_subscribeModals()} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#subscribeModals">Click me</Button>
                                    </div>

                                    <Row className="justify-content-center mt-2">
                                        <Col lg={10}>
                                            <div>
                                                <Image src={subscribeImg} alt="Mac" className="img-fluid" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={4} md={6}>
                            <Card className="text-center border">
                                <Card.Body className="p-4 pb-0">
                                    <h5 className="mb-4">Sign Up Modals</h5>
                                    <p className="text-muted">Here is an example of a sweet alert with a community registration field. </p>

                                    <div>
                                        <Button variant='primary' onClick={() => tog_signUpModals()} data-bs-toggle="modal" data-bs-target="#signupModals">Click me</Button>
                                    </div>

                                    <Row className="justify-content-center mt-2">
                                        <Col lg={10}>
                                            <div>
                                                <Image src={signupImg} alt="Mac" className="img-fluid" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

{/* Custom Modals Example */}

            {/* Success Message */}

            <Modal id="success-Payment" tabIndex="-1" show={modal_successMessage} onHide={() => { tog_successMessage(); }} centered>
                <Modal.Body className='text-center p-5'>
                    <div className="text-end">
                        <button type="button" onClick={() => { tog_successMessage(); }} className="btn-close text-end" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="mt-2">
                        <img src={Success}
                            style={{ width: "150px", height: "150px" }}
                            alt="">
                        </img>
                        {/* trigger="hover" */}
                        <h4 className="mb-3 mt-4">Your Transaction is Successfull !</h4>
                        <p className="text-muted fs-15 mb-4">Successful transaction is the status of operation whose result is the payment of the amount paid by the customer in favor of the merchant.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <button className="btn btn-primary">New transaction</button>
                            <button className="btn btn-soft-success"><i className="ri-links-line align-bottom"></i> Copy tracking link</button>
                        </div>
                    </div>
                </Modal.Body>
                <div className="modal-footer bg-light p-3 justify-content-center" >
                    <p className="mb-0 text-muted">You like our service? <Link to="#" className="link-secondary fw-semibold">Invite Friends</Link></p>
                </div>
            </Modal>


            {/* Login Modals */}

            <Modal id="loginModals" tabIndex="-1" show={modal_loginModals} onHide={() => { tog_loginModals(); }} centered>
                <div className="modal-content border-0 overflow-hidden">
                    <Modal.Body className='login-modal p-5'>
                        <h5 className="text-white fs-20">Login</h5>
                        <p className="text-white-50 mb-4">Don't have an account? <Link to="/#" className="text-white">Sign Up.</Link></p>
                        <div className="vstack gap-2 justify-content-center">
                            <button className="btn btn-light"><i className="ri-google-fill align-bottom text-danger"></i> Google</button>
                            <button className="btn btn-info"><i className="ri-facebook-fill align-bottom"></i> Facebook</button>
                        </div>
                    </Modal.Body>
                    <Modal.Body className="p-5">
                        <h5 className="mb-3">Login with Email</h5>
                        <form>
                            <div className="mb-2">
                                <Form.Control type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email/username" />
                            </div>
                            <div className="mb-3">
                                <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                                <div className="mt-1 text-end">
                                    <Link to="/auth-pass-reset-basic">Forgot password ?</Link>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </Modal.Body>
                </div>
            </Modal>


            {/* Subscribe Modals */}

            <Modal id="subscribeModals" tabIndex="-1" show={subscribeModals} onHide={() => { tog_subscribeModals(); }} centered size='lg'>
                <Row className="g-0">
                    <Col lg={7}>
                        <div className="modal-body p-5">
                            <h2 className="lh-base">Subscribe now today to get <span className="text-danger">20% off</span> experiences!</h2>
                            <p className="text-muted mb-4">A free bet is a bet which is provided by a betting
                                site for a customer to place and then benefit from the winnings. Free bets are commonly used as welcome offers.</p>
                            <div className="input-group mb-3">

                                <Form.Control type="text" className="form-control" placeholder="Enter your email" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                <button className="btn btn-primary" type="button" id="button-addon1">Subscript Now</button>
                            </div>

                            <div className="form-check">
                                <Form.Control type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">By subscribing to a particular channel or user on YouTube, you can receive instant updates.</label>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="subscribe-modals-cover h-100">
                            <Image src={Back} alt="" className="h-100 w-100 object-fit-cover" style={{ clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)" }} />
                        </div>
                    </Col>
                </Row>
            </Modal>


            {/* Subscribe Modals */}

            <Modal id="signupModals" tabIndex="-1" show={modal_signUpModals} onHide={() => { tog_signUpModals(); }} centered>
                <Modal.Header className="p-3">
                    Sign Up
                </Modal.Header>
                <Alert color="success" className="rounded-0 mb-0">
                    <p className="mb-0">Up to <span className="fw-semibold">50% OFF</span>, Hurry up before the stock ends</p>
                </Alert>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <Form.Control type="email" className="form-control" id="fullName" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">Email address</label>
                            <Form.Control type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                        </div>
                        <div className="mb-3 form-check">
                            <Form.Control type="checkbox" className="form-check-input" id="checkTerms" />
                            <label className="form-check-label" htmlFor="checkTerms">I agree to the <span className="fw-semibold">Terms of Service</span> and Privacy Policy</label>
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary">Sign Up Now</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

    </React.Fragment>
    )
}

export default CustomModalsExample;