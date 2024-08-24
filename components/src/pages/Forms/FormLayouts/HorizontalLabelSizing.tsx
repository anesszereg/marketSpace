import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { HorizontalFormLabelSizing } from './FormLayoutsCode';

const HorizontalLabelSize = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Horizontal Form Label Sizing</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>col-form-label-sm</code> class to set small size form label or <code>col-form-label-lg</code> class to set large size form label to &lt;label&gt;. No such class is required for the default size form label.</p>

                            <Row className="align-items-center g-3">
                                <Col xxl={4}>
                                    <Row>
                                        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                                        <Col sm={10}>
                                            <Form.Control type="email" className="from-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xxl={4}>
                                    <Row>
                                        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                                        <Col sm={10}>
                                            <Form.Control type="email" id="colFormLabel" placeholder="col-form-label" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xxl={4}>
                                    <Row>
                                        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                        <Col sm={10}>
                                            <Form.Control type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <HorizontalFormLabelSizing />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default HorizontalLabelSize;