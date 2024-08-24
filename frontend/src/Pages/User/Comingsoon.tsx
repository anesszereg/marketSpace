import React from "react";
import { Button, Card, Col, Container, Form, Row ,Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

//img
import logodark from "assets/images/logo-dark.png";
import logolight from "assets/images/logo-light.png";
import comingsoon from "assets/images/comingsoon.png";
import { useFormik } from "formik";
import * as Yup from 'yup';

interface coundown {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    completed: boolean
}

const Comingsoon = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email")
        }),
        onSubmit: (values) => {
            // console.log("value", values);
        },
    });

    const renderer = ({ days, hours, minutes, seconds, completed }: coundown) => {
        if (completed) {
            return <span>The countdown has ended!</span>;
        } else {
            return (
                <>
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
                </>
            );
        }
    };

    return (
        <React.Fragment>
            <section className="auth-page-wrapper position-relative bg-light min-vh-100 d-flex align-items-center justify-content-between">
                <div className="auth-header position-fixed top-0 start-0 end-0 bg-body">
                    <Container fluid >
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
                                        <Card.Body className="text-center p-4">
                                            <div className="text-center px-sm-5 mx-5">
                                                <Image src={comingsoon} alt="" height={110} />
                                            </div>
                                            <div className="mt-4 text-center pt-3">
                                                <div className="position-relative">
                                                    <h4 className="fs-22 error-subtitle text-uppercase mb-0">Coming Soon</h4>
                                                    <div>
                                                        <Row className="justify-content-center mt-5">
                                                            <Col lg={10}>
                                                                <div className="countdownlist">
                                                                    <Countdown date="Oct 30, 2023" className="countdownlist" renderer={renderer} />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <div className="mt-5">
                                                            <h5 className="fs-16">Get notified when we launch</h5>
                                                            <p className="text-muted">Don't worry we will not spam you 😊</p>
                                                        </div>
                                                        <Form action="#" onSubmit={formik.handleSubmit}>
                                                            <div className="countdown-input-subscribe mx-auto mt-4">
                                                                <Form.Control
                                                                    name="email"
                                                                    type="email"
                                                                    className="form-control shadow"
                                                                    placeholder="Enter your email address"
                                                                    value={formik.values.email}
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                />
                                                                {formik.errors.email && formik.touched.email ? (
                                                                    <span className="text-danger">{formik.errors.email}</span>
                                                                ) : null}
                                                                <Button variant="primary" type="submit" id="button-email">Send<i className="ri-send-plane-2-fill align-bottom ms-2" /></Button>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                </div>
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

export default Comingsoon;