import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Alert, Button, Form } from "react-bootstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux
import { useSelector, useDispatch } from "react-redux";

import withRouter from "Common/withRouter";

//Import Breadcrumb
import Breadcrumb from 'Common/BreadCrumb';

import avatar from "../../assets/images/users/avatar-1.jpg";

// actions
import { editProfile, resetProfileFlag } from "slices/thunk";

const UserProfile = () => {

    document.title = "User Profile | Toner eCommerce + Admin React Template";

    const dispatch = useDispatch<any>();

    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [idx, setidx] = useState(1);

    const { error, success } = useSelector((state: any) => ({
        error: state.Profile.error,
        success: state.Profile.success,
    }));

    useEffect(() => {
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser") || "{}");
            if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
                setname(obj.displayName);
                setemail(obj.email);
                setidx(obj.uid);
            } else if (
                process.env.REACT_APP_DEFAULTAUTH === "fake" ||
                process.env.REACT_APP_DEFAULTAUTH === "jwt"
            ) {
                setname(obj.username);
                setemail(obj.email);
                setidx(obj.uid);
            }
            setTimeout(() => {
                dispatch(resetProfileFlag());
            }, 3000);
        }
    }, [dispatch, success]);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            username: name || '',
            idx: idx || '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Please Enter Your UserName"),
        }),
        onSubmit: (values) => {
            dispatch(editProfile(values));
        }
    });

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumb title="Toner" pageTitle="Accounts" />

                    <Row>
                        <Col lg="12">
                            {error && error ? <Alert variant="danger">{error}</Alert> : null}
                            {success ? <Alert variant="success">{success}</Alert> : null}

                            <Card>
                                <Card.Body>
                                    <div className="d-flex">
                                        <div className="mx-3">
                                            <img
                                                src={avatar}
                                                alt=""
                                                className="avatar-md rounded-circle img-thumbnail"
                                            />
                                        </div>
                                        <div className="flex-grow-1 align-self-center">
                                            <div className="text-muted">
                                                <h5>{name}</h5>
                                                <p className="mb-1">{email}</p>
                                                <p className="mb-0">Id no: #{idx}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <h4 className="card-title mb-4">Change User Name</h4>

                    <Card>
                        <Card.Body>
                            <Form
                                className="form-horizontal"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    validation.handleSubmit();
                                    return false;
                                }}
                            >
                                <div className="form-group">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control
                                        name="username"
                                        // value={name}
                                        className="form-control"
                                        placeholder="Enter User Name"
                                        type="text"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.username || ""}
                                        isInvalid={
                                            validation.touched.username && validation.errors.username ? true : false
                                        }
                                    />
                                    {validation.touched.username && validation.errors.username ? (
                                        <Form.Control.Feedback type="invalid">{validation.errors.username}</Form.Control.Feedback>
                                    ) : null}
                                    <Form.Control name="idx" value={idx} type="hidden" />
                                </div>
                                <div className="text-center mt-4">
                                    <Button type="submit" variant="danger">
                                        Update User Name
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default withRouter(UserProfile);
