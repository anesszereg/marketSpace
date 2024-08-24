import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

// Import Images
import logoDark from 'assets/images/logo-dark.png'
import error404 from 'assets/images/error400.png'
import { Link } from 'react-router-dom';

const Error404 = () => {

    document.title = "404 | Toner eCommerce + Admin React Template";
    
    return (
        <React.Fragment>
            <section className="auth-page-wrapper position-relative bg-light min-vh-100 d-flex align-items-center justify-content-between">
                <div className="auth-header position-fixed top-0 start-0 end-0 bg-body">
                    <Container fluid={true}>
                        <Row className="justify-content-between align-items-center">
                            <Col className="col-2">
                                <Link to="/"><img src={logoDark} alt="" height="24" /></Link>
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
                                                <img src={error404} className="img-fluid" alt=""/>
                                            </div>
                                            <div className="mt-4 text-center pt-3">
                                                <div className="position-relative">
                                                    <h4 className="fs-18 error-subtitle text-uppercase mb-0">Opps, page not found</h4>
                                                    <p className="fs-15 text-muted mt-3">It will be as simple as Occidental in fact,
                                                        it will Occidental to an English person</p>
                                                    <div className="mt-4">
                                                        <Link to="/" className="btn btn-primary"><i className="mdi mdi-home me-1"></i>Back to home</Link>
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
}

export default Error404;