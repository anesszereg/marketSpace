import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';

// Import Images
import logoDark from 'assets/images/logo-dark.png'
import logoLight from 'assets/images/logo-light.png'
import comingsoon from 'assets/images/comingsoon.png'
import { Link } from 'react-router-dom';

const ComingSoon = () => {

    document.title = "Coming Soon | Toner eCommerce + Admin React Template";

    const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
        if (completed) {
            // Render a completed state
            return <span>You are good to go!</span>
        } else {
            return (
                <>
                    <div className="countdownlist">
                        <div className="countdownlist-item">
                            <div className="count-title">Days</div>
                            <div className="count-num">{days}</div>
                        </div>
                        <div className="countdownlist-item">
                            <div className="count-title">Hours</div>
                            <div className="count-num">{hours}</div>
                        </div>
                        <div className="countdownlist-item">
                            <div className="count-title">Minutes</div>
                            <div className="count-num">{minutes}</div>
                        </div>
                        <div className="countdownlist-item">
                            <div className="count-title">Seconds</div>
                            <div className="count-num">{seconds}</div>
                        </div>
                    </div>
                </>
            );
        };
    };

    return (
        <React.Fragment>
            <section className="auth-page-wrapper position-relative bg-light min-vh-100 d-flex align-items-center justify-content-between">
                <div className="auth-header position-fixed top-0 start-0 end-0 bg-body">
                    <Container fluid={true}>
                        <Row className="justify-content-between align-items-center">
                            <Col className="col-2">
                                <Link className="navbar-brand mb-2 mb-sm-0" to="/">
                                    <img src={logoDark} className="card-logo card-logo-dark" alt="logo dark" height="22" />
                                    <img src={logoLight} className="card-logo card-logo-light" alt="logo light" height="22" />
                                </Link>
                            </Col>
                            <Col className="col-auto">
                                <ul className="list-unstyled hstack gap-2 mb-0">
                                    <li className="me-md-3">
                                        <Link to="#!" className="text-body fw-medium fs-15">Become a Selling</Link>
                                    </li>
                                    <li className="d-none d-md-block">
                                        <Link to="#!" className="btn btn-soft-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-google-play align-middle me-1"></i> Download App
                                        </Link>
                                    </li>
                                    <li className="d-none d-md-block">
                                        <Link to="#!" className="btn btn-soft-primary" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-apple align-middle me-1"></i> Download App
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="w-100">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <div className="auth-card mx-lg-3">
                                    <Card className="border-0 mb-0">
                                        <Card.Body className="text-center p-4">

                                            <div className="text-center px-sm-5 mx-5">
                                                <img src={comingsoon} alt="" height="110" />
                                            </div>
                                            <div className="mt-4 text-center pt-3">
                                                <div className="position-relative">
                                                    <h4 className="fs-22 error-subtitle text-uppercase mb-0">Coming Soon</h4>
                                                    <div>
                                                        <Row className="justify-content-center mt-5">
                                                            <Col lg={10}>
                                                                <Countdown date="2023/12/31" renderer={renderer} />
                                                            </Col>
                                                        </Row>

                                                        <div className="mt-5">
                                                            <h5 className="fs-16">Get notified when we launch</h5>
                                                            <p className="text-muted">Don't worry we will not spam you 😊</p>
                                                        </div>

                                                        <form action="#!">
                                                            <div className="countdown-input-subscribe mx-auto mt-4">
                                                                <Form.Control type="email" className="shadow" placeholder="Enter your email address" required />
                                                                <Button variant='primary' type="submit" id="button-email">Send<i className="ri-send-plane-2-fill align-bottom ms-2"></i></Button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <footer className="footer">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="text-center">
                                        <p className="mb-0 text-muted">©
                                            {(new Date().getFullYear())} Toner. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </footer>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ComingSoon;