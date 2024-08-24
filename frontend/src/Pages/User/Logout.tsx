import React from "react";
import { Card, Col, Container, Row,Image } from "react-bootstrap";
import { Link } from "react-router-dom";

//img
import logodark from "assets/images/logo-dark.png";
import logolight from "assets/images/logo-light.png";
import auth1 from "assets/images/auth/img-1.png";
import avatar1 from "assets/images/users/avatar-1.jpg";

const Logout = () => {
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
                                                    <h1 className="text-white lh-base fw-lighter">You are Logged Out</h1>
                                                </Col>
                                            </Row>
                                        </Card.Header>
                                        <Card.Body className="text-center">
                                            <div className="mb-4">
                                                <Image src={avatar1} alt="" className="avatar-md rounded-circle" />
                                            </div>
                                            <p className="text-muted fs-15">Thank you for using <span className="fw-semibold">Toner</span> admin template</p>
                                            <div>
                                                <Link to='/auth-signin-basic' className="btn btn-primary w-100">Sign In</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>{/*end col*/}
                        </Row>{/*end row*/}
                    </Container>{/*end container*/}
                    <footer className="footer">
                        <Container >
                            <Row>
                                <Col lg={12} >
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
export default Logout;