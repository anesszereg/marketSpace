import React from "react";
import { Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap";

//img
import logodark from "assets/images/logo-dark.png";
import logolight from "assets/images/logo-light.png";
import auth1 from "assets/images/auth/img-1.png";
import { Link } from "react-router-dom";

const Verifyemail = () => {
    const moveToNext = (index: any) => {
        console.log("index", index);
    }

    return (
        <React.Fragment>
            <section className="auth-page-wrapper position-relative bg-light min-vh-100 d-flex align-items-center justify-content-between">
                <div className="auth-header position-fixed top-0 start-0 end-0 bg-body">
                    <Container fluid>
                        <Row className="justify-content-between align-items-center">
                            <Col xs={2}>
                                <Link className="navbar-brand mb-2 mb-sm-0" to='/'>
                                    <Image src={logodark} className="card-logo card-logo-dark" alt="logo dark" height={22} />
                                    <Image src={logolight} className="card-logo card-logo-light" alt="logo light" height={22} />
                                </Link>
                            </Col>{/*-end col*/}
                            <Col className="col-auto">
                                <ul className="list-unstyled hstack gap-2 mb-0">
                                    <li className="me-md-3">
                                        <Link to="#" className="text-body fw-medium fs-15">Become a Selling</Link>
                                    </li>
                                    <li className="d-none d-md-block">
                                        <Link to="#" className="btn btn-soft-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-google-play align-middle me-1" /> Download App
                                        </Link>
                                    </li>
                                    <li className="d-none d-md-block">
                                        <Link to="#" className="btn btn-soft-primary" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-apple align-middle me-1" /> Download App
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>{/*end row*/}
                    </Container>{/*end container-fluid*/}
                </div>
                <div className="w-100">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <div className="auth-card mx-lg-3">
                                    <Card className="border-0 mb-0">
                                        <Card.Header className="bg-primary border-0">
                                            <Row>
                                                <Col lg={4} xs={3} >
                                                    <Image src={auth1} alt="" className="img-fluid" />
                                                </Col>
                                                <Col lg={8} xs={9}>
                                                    <h1 className="text-white lh-base fw-lighter">Verify Your Email</h1>
                                                </Col>
                                            </Row>
                                        </Card.Header>
                                        <Card.Body className="text-center">
                                            <p className="text-muted fs-15">Please enter the 4 digit code sent to <span className="fw-semibold">example@abc.com</span></p>
                                            <div className="p-2">
                                                <Form autoComplete="off">
                                                    <Row>
                                                        <Col xs={3} >
                                                            <div className="mb-3">
                                                                <Form.Label htmlFor="digit1-input" className="visually-hidden">Digit 1</Form.Label>
                                                                <Form.Control type="text" className="form-control-lg bg-light border-light text-center"
                                                                    onKeyUp={(e) => moveToNext(e.target)}
                                                                    maxLength={1} id="digit1-input" />
                                                            </div>
                                                        </Col>{/* end col */}
                                                        <Col xs={3} >
                                                            <div className="mb-3">
                                                                <Form.Label htmlFor="digit2-input" className="visually-hidden">Digit 2</Form.Label>
                                                                <Form.Control type="text" className="form-control-lg bg-light border-light text-center"
                                                                    onKeyUp={(e) => moveToNext(e.target)}
                                                                    maxLength={1} id="digit2-input" />
                                                            </div>
                                                        </Col>{/* end col */}
                                                        <Col xs={3} >
                                                            <div className="mb-3">
                                                                <Form.Label htmlFor="digit3-input" className="visually-hidden">Digit 3</Form.Label>
                                                                <Form.Control type="text" className="form-control-lg bg-light border-light text-center"
                                                                    onKeyUp={(e) => moveToNext(e.target)}
                                                                    maxLength={1} id="digit3-input" />
                                                            </div>
                                                        </Col>{/* end col */}
                                                        <Col xs={3} >
                                                            <div className="mb-3">
                                                                <Form.Label htmlFor="digit4-input" className="visually-hidden">Digit 4</Form.Label>
                                                                <Form.Control type="text" className="form-control-lg bg-light border-light text-center"
                                                                    onKeyUp={(e) => moveToNext(e.target)}
                                                                    maxLength={1} id="digit4-input" />
                                                            </div>
                                                        </Col>{/* end col */}
                                                    </Row>
                                                </Form>{/* end form */}
                                                <div className="mt-3">
                                                    <Button variant="primary" className="w-100">Confirm</Button>
                                                </div>
                                            </div>
                                            <div className="mt-4 text-center">
                                                <p className="mb-0">Didn't receive a code ? <Link to='/auth-pass-reset-basic' className="fw-semibold text-primary text-decoration-underline">Resend</Link> </p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>{/*end col*/}
                        </Row>{/*end row*/}
                    </Container>{/*end container*/}
                    <footer className="footer">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="text-center">
                                        <p className="mb-0 text-muted">©
                                            {new Date().getFullYear()} Toner. Crafted with <i className="mdi mdi-heart text-danger" /> by Themesbrand
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </footer>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Verifyemail;