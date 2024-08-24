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

const SignUp = () => {

    document.title = "Sign Up | Toner eCommerce + Admin React Template";

    const [passwordShow, setPasswordShow] = useState<any>(false);

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email").email('Please add @ in the email address'),
            username: Yup.string().required("Please Enter Your Username"),
            password: Yup.string().required("Please Enter Your Password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        }),
        onSubmit: (values) => {
            console.log("submitted", values)
        }
    });

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
                            <div className="col-auto">
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
                            </div>
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
                                                    <h1 className="text-white text-capitalize lh-base fw-lighter">Let's get started with Toner Store</h1>
                                                </Col>
                                            </Row>
                                        </Card.Header>
                                        <Card.Body>
                                            <p className="text-muted fs-15">Get your free Toner account now</p>
                                            <div className="p-2">
                                                <Form className="needs-validation" action="#" onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}>

                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="useremail">Email <span className="text-danger">*</span></Form.Label>
                                                        <Form.Control type="email" id="useremail" placeholder="Enter email address"
                                                            name="email"
                                                            className="form-control"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.email || ""}
                                                            isInvalid={
                                                                validation.touched.email && validation.errors.email ? true : false
                                                            }
                                                        />
                                                        {validation.touched.email && validation.errors.email ? (
                                                            <Form.Control.Feedback type="invalid"><div>{validation.errors.email}</div></Form.Control.Feedback>
                                                        ) : null}
                                                    </div>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="username">Username <span className="text-danger">*</span></Form.Label>
                                                        <Form.Control type="text" id="username" placeholder="Enter username"
                                                            name="username"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.username || ""}
                                                            isInvalid={
                                                                validation.touched.username && validation.errors.username ? true : false
                                                            }
                                                        />
                                                        {validation.touched.username && validation.errors.username ? (
                                                            <Form.Control.Feedback type="invalid"><div>{validation.errors.username}</div></Form.Control.Feedback>
                                                        ) : null}
                                                    </div>

                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="password-input">Password</Form.Label>
                                                        <div className="position-relative auth-pass-inputgroup">
                                                            <Form.Control type={!passwordShow ? "password" : "text"} className="pe-5 password-input" placeholder="Enter password" id="password-input"
                                                                name="password"
                                                                onChange={validation.handleChange}
                                                                onBlur={validation.handleBlur}
                                                                value={validation.values.password || ""}
                                                                isInvalid={
                                                                    validation.touched.password && validation.errors.password ? true : false
                                                                }
                                                            />
                                                            <Button variant='link' className="btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}><i className="ri-eye-fill align-middle"></i></Button>
                                                            {validation.touched.password && validation.errors.password ? (
                                                                <Form.Control.Feedback type="invalid"><div>{validation.errors.password}</div></Form.Control.Feedback>
                                                            ) : null}
                                                        </div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <p className="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Toner <Link to="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</Link></p>
                                                    </div>

                                                    <div className="mt-4">
                                                        <Button variant='primary' className="w-100" type="submit">Sign Up</Button>
                                                    </div>

                                                    <div className="mt-4 text-center">
                                                        <div className="signin-other-title">
                                                            <h5 className="fs-13 mb-4 title text-muted">Create account with</h5>
                                                        </div>

                                                        <div className="pt-2 hstack gap-2 justify-content-center">
                                                            <Button variant='soft-primary' className="btn-icon"><i className="ri-facebook-fill fs-16"></i></Button>
                                                            <Button variant='soft-danger' className="btn-icon"><i className="ri-google-fill fs-16"></i></Button>
                                                            <Button variant='soft-dark' className="btn-icon"><i className="ri-github-fill fs-16"></i></Button>
                                                            <Button variant='soft-info' className="btn-icon"><i className="ri-twitter-fill fs-16"></i></Button>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </div>
                                            <div className="mt-4 text-center">
                                                <p className="mb-0">Already have an account ? <Link to="/auth-signin-basic" className="fw-semibold text-primary text-decoration-underline"> Signin </Link> </p>
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

export default SignUp;