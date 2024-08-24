import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

// Import Images
import logoDark from 'assets/images/logo-dark.png'
import logoLight from 'assets/images/logo-light.png'
import img1 from 'assets/images/auth/img-1.png'
import { Link } from 'react-router-dom';

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

const PasswordCreate = () => {

    document.title = "Change Password | Toner eCommerce + Admin React Template";

    const [passwordShow, setPasswordShow] = useState<any>(false);
    const [confirmPasswordShow, setConfirmPasswordShow] = useState<any>(false);

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            password: '',
            confirm_password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().required("Please Enter Your Password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
            confirm_password: Yup.string().required("Please Enter Your Confirm Password").oneOf([Yup.ref('password')], 'Passwords must match'),
        }),
        onSubmit: (values) => {
            console.log("Change Password", values)
        }
    });

    return (
        <React.Fragment>
            <section className="auth-page-wrapper position-relative bg-light min-vh-100 d-flex align-items-center justify-content-between">
                <div className="auth-header position-fixed top-0 start-0 end-0 bg-body">
                    <Container fluid={true} className="container-fluid">
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
                                        <Card.Header className="bg-primary border-0">
                                            <Row>
                                                <Col lg={4} className="col-3">
                                                    <img src={img1} alt="" className="img-fluid" />
                                                </Col>
                                                <Col lg={8} className="col-9">
                                                    <h1 className="text-white lh-base fw-lighter">Create New Password</h1>
                                                </Col>
                                            </Row>
                                        </Card.Header>
                                        <Card.Body>
                                            <p className="text-muted fs-15">Your new password must be different from previous used password.</p>

                                            <div className="p-2">
                                                <Form action="#" onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="password-input">Password</Form.Label>
                                                        <div className="position-relative auth-pass-inputgroup">
                                                            <Form.Control type={passwordShow ? "text" : "password"} className="pe-5 password-input" placeholder="Enter password" id="password-input"
                                                                name="password"
                                                                onChange={validation.handleChange}
                                                                onBlur={validation.handleBlur}
                                                                value={validation.values.password || ""}
                                                                isInvalid={
                                                                    validation.touched.password && validation.errors.password ? true : false
                                                                }
                                                            />
                                                            <Button variant="link" className="btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}><i className="ri-eye-fill align-middle"></i></Button>
                                                            {validation.touched.password && validation.errors.password ? (
                                                                <Form.Control.Feedback type="invalid"><div>{validation.errors.password}</div></Form.Control.Feedback>
                                                            ) : null}
                                                        </div>
                                                        <div id="passwordInput" className="form-text">Your password must be 8-20 characters long.</div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="confirm-password-input">Confirm Password</Form.Label>
                                                        <div className="position-relative auth-pass-inputgroup mb-3">
                                                            <Form.Control type={confirmPasswordShow ? "text" : "password"} className="pe-5 password-input" placeholder="Confirm password" id="confirm-password-input"
                                                                name="confirm_password"
                                                                onChange={validation.handleChange}
                                                                onBlur={validation.handleBlur}
                                                                value={validation.values.confirm_password || ""}
                                                                isInvalid={
                                                                    validation.touched.confirm_password && validation.errors.confirm_password ? true : false
                                                                }
                                                            />
                                                            <Button variant="link" className="btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="confirm-password-input" onClick={() => setConfirmPasswordShow(!confirmPasswordShow)}><i className="ri-eye-fill align-middle"></i></Button>
                                                            {validation.touched.confirm_password && validation.errors.confirm_password ? (
                                                                <Form.Control.Feedback type="invalid"><div>{validation.errors.confirm_password}</div></Form.Control.Feedback>
                                                            ) : null}
                                                        </div>
                                                    </div>

                                                    <div className="form-check form-check-primary">
                                                        <Form.Check type="checkbox" value="" id="auth-remember-check" />
                                                        <Form.Label htmlFor="auth-remember-check">Remember me</Form.Label>
                                                    </div>

                                                    <div className="mt-4">
                                                        <Button variant='primary' className="w-100" type="submit">Reset Password</Button>
                                                    </div>

                                                </Form>
                                            </div>
                                            <div className="mt-4 text-center">
                                                <p className="mb-0">Wait, I remember my password... <Link to="/auth-signin-basic" className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
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

export default PasswordCreate;