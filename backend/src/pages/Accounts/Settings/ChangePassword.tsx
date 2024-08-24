import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

const ChangePassword = () => {
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
            <Row>
                <Col lg={4}>
                    <h5 className="fs-16">Change Password</h5>
                    <p className="text-muted mb-lg-0">Personal Identifiable Information (PII) is defined as: Any representation of information that permits the identity of an individual to whom the information applies to be reasonably inferred by either direct or indirect means.</p>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Card.Body>
                            <Row className="g-3">
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="oldpasswordInput">Old Password*</Form.Label>
                                        <Form.Control type="password" id="oldpasswordInput" placeholder="Enter current password" />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <Form.Label htmlFor="password-input">Password</Form.Label>
                                    <div className="position-relative auth-pass-inputgroup">
                                        <Form.Control
                                            type={passwordShow ? "text" : "password"} className="pe-5 password-input" placeholder="Enter password" id="password-input"
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
                                </Col>

                                <Col lg={4}>
                                    <Form.Label htmlFor="confirm-password-input">Confirm Password</Form.Label>
                                    <div className="position-relative auth-pass-inputgroup">
                                        <Form.Control type={confirmPasswordShow ? "text" : "password"} className="pe-5 password-input" placeholder="Confirm password" id="confirm-password-input"
                                            name="confirm_password"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.confirm_password || ""}
                                            isInvalid={
                                                validation.touched.confirm_password && validation.errors.confirm_password ? true : false
                                            }
                                        />
                                        <Button variant='link' className="btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="confirm-password-input" onClick={() => setConfirmPasswordShow(!confirmPasswordShow)}><i className="ri-eye-fill align-middle"></i></Button>
                                        {validation.touched.confirm_password && validation.errors.confirm_password ? (
                                            <Form.Control.Feedback type="invalid"><div>{validation.errors.confirm_password}</div></Form.Control.Feedback>
                                        ) : null}
                                    </div>
                                </Col>

                                <Col lg={12}>
                                    <div>
                                        <Link to="#" className="link-primary text-decoration-underline">Forgot Password ?</Link>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="text-end">
                                        <Button variant='success' type="submit">Change Password</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default ChangePassword;