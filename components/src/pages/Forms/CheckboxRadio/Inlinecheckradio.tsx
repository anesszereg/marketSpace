import React from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap';
import { InlineCheckboxRadio } from './CheckboxRadioCode';

const Inlinecheckradio = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Inline Checkbox & Radios</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>form-check-inline</code> class to form-check class to set horizontally align checkboxes, radios, or switches.</p>
                            <Row>
                                <Col lg={4}>
                                    <div className="mt-4 mt-lg-0">
                                        <div className="form-check form-check-inline">
                                            <Form.Check type="checkbox" id="inlineCheckbox6" value="option1" />
                                            <Form.Label htmlFor="inlineCheckbox6">1</Form.Label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Form.Check type="checkbox" id="inlineCheckbox7" value="option2" />
                                            <Form.Label htmlFor="inlineCheckbox7">2</Form.Label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Form.Check type="checkbox" id="inlineCheckbox8" value="option3" disabled />
                                            <Form.Label htmlFor="inlineCheckbox8">3 (disabled)</Form.Label>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={4}>
                                    <div className="mt-4 mt-lg-0">
                                        <div className="form-check form-check-inline">
                                            <Form.Check type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" />
                                            <Form.Label htmlFor="inlineRadio1">1</Form.Label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Form.Check type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option2" />
                                            <Form.Label htmlFor="inlineRadio2">2</Form.Label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Form.Check type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option3" disabled />
                                            <Form.Label htmlFor="inlineRadio3">3 (disabled)</Form.Label>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={4}>
                                    <div className="mt-4 mt-lg-0">
                                        <div className="form-check form-switch form-check-inline" dir="ltr">
                                            <Form.Check type="checkbox" id="inlineswitch5" />
                                            <Form.Label htmlFor="inlineswitch5">1</Form.Label>
                                        </div>
                                        <div className="form-check form-switch form-check-inline" dir="ltr">
                                            <Form.Check type="checkbox" id="inlineswitch6" />
                                            <Form.Label htmlFor="inlineswitch6">2</Form.Label>
                                        </div>
                                        <div className="form-check form-switch form-check-inline" dir="ltr">
                                            <Form.Check type="checkbox" id="inlineswitchdisabled2" disabled />
                                            <Form.Label htmlFor="inlineswitchdisabled2">2</Form.Label>
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
                                <InlineCheckboxRadio />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Inlinecheckradio;