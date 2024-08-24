import React from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap';
import { WithoutLabels } from './CheckboxRadioCode';

const FromWithoutLabels = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Without Labels</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Omit the wrapping, <code>form-check</code> class for checkboxes, radios, or switches that have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using aria-label).</p>
                            <Row>
                                <Col lg={4}>
                                    <div className="mt-4 mt-lg-0">
                                        <div className="form-check form-check-inline">
                                            <Form.Check type="checkbox" id="inlineCheckbox1" value="option1" />
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Form.Check type="checkbox" id="inlineCheckbox2" value="option2" />
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Form.Check type="checkbox" id="inlineCheckbox3" value="option3" disabled />
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={4}>
                                    <div className="mt-4 mt-lg-0">
                                        <div className="form-check form-check-inline">
                                            <Form.Check type="radio" name="inlineRadioOptions" id="WithoutinlineRadio1" value="option1" />
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Form.Check type="radio" name="inlineRadioOptions" id="WithoutinlineRadio2" value="option2" />
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Form.Check type="radio" name="inlineRadioOptions" id="WithoutinlineRadio3" value="option3" disabled />
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={4}>
                                    <div className="mt-4 mt-lg-0">
                                        <div className="form-check form-switch form-check-inline" dir="ltr">
                                            <Form.Check type="checkbox" id="inlineswitch" />
                                        </div>
                                        <div className="form-check form-switch form-check-inline" dir="ltr">
                                            <Form.Check type="checkbox" id="inlineswitch1" />
                                        </div>
                                        <div className="form-check form-switch form-check-inline" dir="ltr">
                                            <Form.Check type="checkbox" id="inlineswitchdisabled" disabled />
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
                                <WithoutLabels />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default FromWithoutLabels