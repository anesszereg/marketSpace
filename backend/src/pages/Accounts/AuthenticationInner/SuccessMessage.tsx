import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

// Import Images
import logoDark from 'assets/images/logo-dark.png'
import logoLight from 'assets/images/logo-light.png'
import img1 from 'assets/images/auth/img-1.png'
import { Link } from 'react-router-dom';

const SuccessMessage = () => {

    document.title = "Success Message | Toner eCommerce + Admin React Template";

    return (
        <React.Fragment>
            <section className="auth-page-wrapper position-relative bg-light min-vh-100 d-flex align-items-center justify-content-between">
                <div className="auth-header position-fixed top-0 start-0 end-0 bg-body">
                    <Container fluid={true} className="container-fluid">
                        <Row className="justify-content-between align-items-center">
                            <Col className="col-2">
                                <Link className="navbar-brand mb-2 mb-sm-0" to="/">
                                    <img src={logoDark} className="card-logo card-logo-dark" alt="logo dark" height="22"/>
                                    <img src={logoLight} className="card-logo card-logo-light" alt="logo light" height="22"/>
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
                                        <Card.Header className="bg-primary border-0">
                                            <Row>
                                                <Col lg={4} className="col-3">
                                                    <img src={img1} alt="" className="img-fluid"/>
                                                </Col>
                                                <Col lg={8} className="col-9">
                                                    <h1 className="text-white lh-base fw-lighter">Well done !</h1>
                                                </Col>
                                            </Row>
                                        </Card.Header>
                                        <Card.Body className="text-center">
                                            <div className="avatar-sm mx-auto mb-4">
                                                <div className="avatar-title bg-success-subtle text-success fs-20 rounded">
                                                    <i className="bi bi-check2-circle"></i>
                                                </div>
                                            </div>
                                            
                                            <p className="text-muted fs-15">Aww yeah, you successfully read this important message.</p>

                                            <div>
                                                <Link to="/auth-signin-basic" className="btn btn-success w-100">Back to Dashboard</Link>
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
}

export default SuccessMessage;