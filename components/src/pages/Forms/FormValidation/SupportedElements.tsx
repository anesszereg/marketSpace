import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { SupportedElements } from './FormValidationCode';

const SupportedElement = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Supported Elements</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Block-level or inline-level form text can be created using <code>.form-text</code>.</p>

                            <Form className="was-validated">
                                <div className="mb-3">
                                    <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
                                    <Form.Control as="textarea" type="text-area" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a message in the textarea.
                                    </Form.Control.Feedback>
                                </div>

                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
                                    <label className="form-check-label" htmlFor="validationFormCheck1">Check this checkbox</label>
                                    <Form.Control.Feedback type="invalid">Example invalid feedback text</Form.Control.Feedback>
                                </div>

                                <div className="form-check">
                                    <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
                                    <label className="form-check-label" htmlFor="validationFormCheck2">Toggle this radio</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
                                    <label className="form-check-label" htmlFor="validationFormCheck3">Or toggle this other radio</label>
                                    <Form.Control.Feedback type="invalid">More example invalid feedback text</Form.Control.Feedback>
                                </div>

                                <div className="mb-3">
                                    <select className="form-select" required aria-label="select example">
                                        <option defaultValue="">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <Form.Control.Feedback type="invalid">Example invalid select feedback</Form.Control.Feedback>
                                </div>

                                <div className="mb-3">
                                    <input type="file" className="form-control" aria-label="file example" required />
                                    <Form.Control.Feedback type="invalid">Example invalid form file feedback</Form.Control.Feedback>
                                </div>

                                <div className="mb-0">
                                    <Button className="btn btn-primary" type="submit" disabled>Submit form</Button>
                                </div>
                            </Form>
                        </Card.Body>
                        <Card.Body className=" bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "352px" }}>
                                <SupportedElements />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SupportedElement;