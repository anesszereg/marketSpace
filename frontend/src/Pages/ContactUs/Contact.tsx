import React from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { contactdetails } from "Common/data";

const ContactUs = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Please Enter Your Name'),
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email"),
            subject: Yup.string().required('Please Enter Your Subject'),
            message: Yup.string().required("Please Enter Your some message")
        }),
        onSubmit: (values) => {
            // console.log("value", values);
        },
    });

    return (
        <React.Fragment>
            <section className="ecommerce-about bg-primary">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={5}>
                            <div className="text-center">
                                <h1 className="text-white">Contact Us</h1>
                                <p className="fs-16 mb-0 text-white-75">Let's start something great together. Get in touch with one of the team today!</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section">
                <Container>
                    <Row>
                        <Col lg={4}>
                            {
                                (contactdetails || [])?.map((item, idx) => {
                                    return (
                                        <Card key={idx} className="border border-opacity-25">
                                            <Card.Body className="p-4">
                                                <div className="d-flex">
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <div className={`avatar-title bg-${item.color}-subtle text-${item.color} rounded fs-17`}>
                                                            <i className={`${item.icon}`}></i>
                                                        </div>
                                                    </div>
                                                    <div className="ms-3 flex-grow-1">
                                                        <h5 className="fs-17 lh-base mb-2">{item.title}</h5>
                                                        <p className="text-muted fs-14 mb-0">{item.describe}</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                            }
                        </Col>

                        <Col lg={8}>
                            <div className="custom-form card p-4 p-lg-5">
                                <Form name="myForm" action="#" onSubmit={formik.handleSubmit}>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="text-center mb-4">
                                                <h3 className="text-capitalize">Get In Touch with us for more Information</h3>
                                            </div>
                                        </Col>
                                        <Col lgt={6}>
                                            <div className="form-group mt-3">
                                                <Form.Label htmlFor="nameInput">Name<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    name="name"
                                                    id="nameInput"
                                                    type="text"
                                                    placeholder="Enter name"
                                                    value={formik.values.name}
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange} />
                                                {
                                                    formik.errors.name && formik.touched.name ? (
                                                        <span className="text-danger">{formik.errors.name}</span>
                                                    ) : null
                                                }
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form-group mt-3">
                                                <Form.Label htmlFor="emailInput">Email<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    name="email"
                                                    id="emailInput"
                                                    type="email"
                                                    placeholder="Enter email"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {
                                                    formik.errors.email && formik.touched.email ? (
                                                        <span className="text-danger">{formik.errors.email}</span>
                                                    ) : null
                                                }
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form-group mt-3">
                                                <Form.Label htmlFor="subjectInput">Subject<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="subjectInput"
                                                    placeholder="Enter Subject.."
                                                    name="subject"
                                                    value={formik.values.subject}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {
                                                    formik.errors.subject && formik.touched.subject ? (
                                                        <span className="text-danger">{formik.errors.subject}</span>
                                                    ) : null
                                                }
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form-group mt-3">
                                                <Form.Label htmlFor="messageInput">Message<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    name="message"
                                                    id="messageInput"
                                                    rows={4}
                                                    placeholder="Enter message..."
                                                    value={formik.values.message}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                >
                                                    {
                                                        formik.errors.message && formik.touched.message ? (
                                                            <span className="text-danger">{formik.errors.message}</span>
                                                        ) : null
                                                    }
                                                </Form.Control>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="text-end mt-4">
                                                <Button type="submit" id="submit" name="submit" variant="primary" >Send Message <i className="bi bi-arrow-right-short align-middle fs-16 ms-1"></i></Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
            <section>
                <Container fluid className="px-0">
                    <Row className="g-0">
                        <Col lg={12}>
                            <div className="map">
                                <iframe
                                    title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3024.4645962375394!2d-74.01354043428768!3d40.7077878458095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSoHo%2094%20Broadway%20St%20New%20York%2C%20NY%201001!5e0!3m2!1sen!2sin!4v1669110084163!5m2!1sen!2sin"
                                    className="w-100"
                                    height="400"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment >
    )
}

export default ContactUs;