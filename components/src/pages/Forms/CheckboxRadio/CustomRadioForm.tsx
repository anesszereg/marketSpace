import React from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap';
import { CustomRadio } from './CheckboxRadioCode';

const CustomRadioForm = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Custom Radio</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <div>
                                        <p className="text-muted">Use <code>form-check-</code> class with below-mentioned color variation to set a color radio.</p>

                                        <div className="form-check form-radio-primary mb-3">
                                            <Form.Check type="radio" name="formradiocolor1" id="formradioRight5" defaultChecked />
                                            <Form.Label htmlFor="formradioRight5">
                                                Radio Primary
                                            </Form.Label>
                                        </div>

                                        <div className="form-check form-radio-secondary mb-3">
                                            <Form.Check type="radio" name="formradiocolor2" id="formradioRight6" defaultChecked />
                                            <Form.Label htmlFor="formradioRight6">
                                                Radio Secondary
                                            </Form.Label>
                                        </div>

                                        <div className="form-check form-radio-success mb-3">
                                            <Form.Check type="radio" name="formradiocolor3" id="formradioRight7" defaultChecked />
                                            <Form.Label htmlFor="formradioRight7">
                                                Radio Success
                                            </Form.Label>
                                        </div>

                                        <div className="form-check form-radio-warning mb-3">
                                            <Form.Check type="radio" name="formradiocolor4" id="formradioRight8" defaultChecked />
                                            <Form.Label htmlFor="formradioRight8">
                                                Radio Warning
                                            </Form.Label>
                                        </div>

                                        <div className="form-check form-radio-danger mb-3">
                                            <Form.Check type="radio" name="formradiocolor5" id="formradioRight9" defaultChecked />
                                            <Form.Label htmlFor="formradioRight9">
                                                Radio Danger
                                            </Form.Label>
                                        </div>

                                        <div className="form-check form-radio-info mb-3">
                                            <Form.Check type="radio" name="formradiocolor6" id="formradioRight10" defaultChecked />
                                            <Form.Label htmlFor="formradioRight10">
                                                Radio Info
                                            </Form.Label>
                                        </div>

                                        <div className="form-check form-radio-dark">
                                            <Form.Check type="radio" name="formradiocolor7" id="formradioRight11" defaultChecked />
                                            <Form.Label htmlFor="formradioRight11">
                                                Radio Dark
                                            </Form.Label>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="mt-4 mt-md-0">
                                        <p className="text-muted">Use <code>form-check-outline</code> class and <code>form-check-</code> class with below-mentioned color variation to set a color radio with outline.</p>

                                        <div className="form-check form-radio-outline form-radio-primary mb-3">
                                            <Form.Check type="radio" name="formradiocolor9" id="formradioRight13" defaultChecked />
                                            <Form.Label htmlFor="formradioRight13">
                                                Radio Outline Primary
                                            </Form.Label>
                                        </div>

                                        <div className="form-check form-radio-outline form-radio-secondary mb-3">
                                            <Form.Check type="radio" name="formradiocolor10" id="formradioRight14" defaultChecked />
                                            <Form.Label htmlFor="formradioRight14">
                                                Radio Outline Secondary
                                            </Form.Label>
                                        </div>

                                        <div className="form-check form-radio-outline form-radio-success mb-3">
                                            <Form.Check type="radio" name="formradiocolor11" id="formradioRight15" defaultChecked />
                                            <Form.Label htmlFor="formradioRight15">
                                                Radio Outline Success
                                            </Form.Label>
                                        </div>

                                        <div className="form-check form-radio-outline form-radio-warning mb-3">
                                            <Form.Check type="radio" name="formradiocolor12" id="formradioRight16" defaultChecked />
                                            <Form.Label htmlFor="formradioRight16">
                                                Radio Outline Warning
                                            </Form.Label>
                                        </div>

                                        <div className="form-check form-radio-outline form-radio-danger mb-3">
                                            <Form.Check type="radio" name="formradiocolor13" id="formradioRight17" defaultChecked />
                                            <Form.Label htmlFor="formradioRight17">
                                                Radio Outline Danger
                                            </Form.Label>
                                        </div>

                                        <div className="form-check form-radio-outline form-radio-info mb-3">
                                            <Form.Check type="radio" name="formradiocolor14" id="formradioRight18" defaultChecked />
                                            <Form.Label htmlFor="formradioRight18">
                                                Radio Outline Info
                                            </Form.Label>
                                        </div>

                                        <div className="form-check form-radio-outline form-radio-dark">
                                            <Form.Check type="radio" name="formradiocolor15" id="formradioRight19" defaultChecked />
                                            <Form.Label htmlFor="formradioRight19">
                                                Radio Outline Dark
                                            </Form.Label>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <CustomRadio />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CustomRadioForm;