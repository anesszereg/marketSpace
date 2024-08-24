import React, { useState } from "react"
import { Card, Col, Container, Row, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

//img
import logodark from "assets/images/logo-dark.png";
import logolight from "assets/images/logo-light.png";
import auth1 from "assets/images/auth/img-1.png";

const Passwordcreate = () => {
    const passwordtype = "password";
    const confirmPasswordtype = 'password';

    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .matches(RegExp('(.*[a-z].*)'), 'At least lowercase letter')
                .matches(RegExp('(.*[A-Z].*)'), 'At least uppercase letter')
                .matches(RegExp('(.*[0-9].*)'), 'At least one number')
                .required("This field is required"),
            confirmPassword: Yup.string()
                .required()
                .oneOf([Yup.ref("password")], "Passwords do not match"),
        }),
        onSubmit: (values) => {
            // console.log("value", values);
        },
    });
    const handleTooglePassword = () => {
        passwordtype === password ? setPassword("text") : setPassword("password");
        console.log("password", password);

    }
    const handleConfirmPassword = () => {
        confirmPasswordtype === confirmpassword ? setConfirmpassword("text") : setConfirmpassword("password");
        console.log("confirmpassword", confirmpassword);

    }
    return (
        <React.Fragment>
            <section className="auth-page-wrapper position-relative bg-light min-vh-100 d-flex align-items-center justify-content-between">
                <div className="auth-header position-fixed top-0 start-0 end-0 bg-body">
                    <Container fluid>
                        <Row className=" justify-content-between align-items-center">
                            <Col xs={2}>
                                <Link className="navbar-brand mb-2 mb-sm-0" to="#">
                                    <Image src={logodark} className="card-logo card-logo-dark" alt="logo dark" height={22} />
                                    <Image src={logolight} className="card-logo card-logo-light" alt="logo light" height={22} />
                                </Link>
                            </Col>{/*-end col*/}
                            <div className="col-auto">
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
                            </div>
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
                                            <Row >
                                                <Col lg={4} xs={3}>
                                                    <Image src={auth1} alt="" className="img-fluid" />
                                                </Col>
                                                <Col lg={8} xs={9}>
                                                    <h1 className="text-white lh-base fw-lighter">Create New Password</h1>
                                                </Col>
                                            </Row>
                                        </Card.Header>
                                        <Card.Body>
                                            <p className="text-muted fs-15">Your new password must be different from previous used password.</p>
                                            <div className="p-2">
                                                <Form action='/auth-signin-basic' onSubmit={formik.handleSubmit}>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="password-input">Password</Form.Label>
                                                        <div className="position-relative auth-pass-inputgroup">
                                                            <Form.Control
                                                                type={password}
                                                                className="pe-5 password-input"
                                                                placeholder="Enter password"
                                                                id="password-input"
                                                                name="password"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.password}
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            {formik.errors.password && formik.touched.password ? (
                                                                <span className="text-danger">{formik.errors.password}</span>
                                                            ) : null}
                                                            <Button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" id="password-addon" bsPrefix="btn btn-none" onClick={handleTooglePassword}><i className="ri-eye-fill align-middle" /></Button>
                                                        </div>
                                                        <div id="passwordInput" className="form-text">Your password must be 8-20 characters long.</div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="confirm-password-input">Confirm Password</Form.Label>
                                                        <div className="position-relative auth-pass-inputgroup mb-3">
                                                            <Form.Control
                                                                type={confirmpassword}
                                                                className="pe-5 password-input"
                                                                placeholder="Confirm password"
                                                                id="confirm-password-input"
                                                                name="confirmPassword"
                                                                value={formik.values.confirmPassword}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                                                                <span className="text-danger">{formik.errors.confirmPassword}</span>
                                                            ) : null}
                                                            <Button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" id="confirm-password-input" bsPrefix="btn btn-none" onClick={handleConfirmPassword}><i className="ri-eye-fill align-middle" /></Button>
                                                        </div>
                                                    </div>
                                                    <div className="form-check form-check-primary">
                                                        <Form.Control className="form-check-input" type="checkbox" id="auth-remember-check" />
                                                        <Form.Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Form.Label>
                                                    </div>
                                                    <div className="mt-4">
                                                        <Button variant="primary" className="w-100" type="submit">Reset Password</Button>
                                                    </div>
                                                </Form>
                                            </div>
                                            <div className="mt-4 text-center">
                                                <p className="mb-0">Wait, I remember my password... <Link to='/auth-signin-basic' className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
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

export default Passwordcreate;