import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { AutoSizing } from './FormLayoutsCode';

const AutoSize = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Auto Sizing</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Change <code>col</code> class to <code>col-auto</code> class so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.</p>

                            <Form action="#">
                                <Row className="gy-2 gx-3 mb-3 align-items-center">
                                    <div className="col-sm-auto">
                                        <Form.Label className="visually-hidden" htmlFor="autoSizingInput">Name</Form.Label>
                                        <Form.Control type="text" id="autoSizingInput" placeholder="Jane Doe" />
                                    </div>
                                    <div className="col-sm-auto">
                                        <Form.Label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</Form.Label>
                                        <div className="input-group">
                                            <div className="input-group-text">@</div>
                                            <Form.Control type="text" id="autoSizingInputGroup" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div className="col-sm-auto">
                                        <Form.Label className="visually-hidden" htmlFor="autoSizingSelect">Preference</Form.Label>
                                        <Form.Select data-choices data-choices-sorting="true" id="autoSizingSelect">
                                            <option defaultValue="">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>
                                    <div className="col-sm-auto">
                                        <div className="form-check">
                                            <Form.Check type="checkbox" id="autoSizingCheck" />
                                            <Form.Label htmlFor="autoSizingCheck">
                                                Remember me
                                            </Form.Label>
                                        </div>
                                    </div>
                                    <div className="col-sm-auto">
                                        <Button type="button" variant="primary">Submit</Button>
                                    </div>
                                </Row>
                            </Form>

                            <Form action="#">
                                <Row className="gx-3 gy-2 align-items-center">
                                    <Col sm={3}>
                                        <Form.Label className="visually-hidden" htmlFor="specificSizeInputName">Name</Form.Label>
                                        <Form.Control type="text" id="specificSizeInputName" placeholder="Jane Doe" />
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Username</Form.Label>
                                        <div className="input-group">
                                            <div className="input-group-text">@</div>
                                            <Form.Control type="text" id="specificSizeInputGroupUsername" placeholder="Username" />
                                        </div>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Label className="visually-hidden" htmlFor="specificSizeSelect">Preference</Form.Label>
                                        <Form.Select data-choices data-choices-sorting="true" id="specificSizeSelect">
                                            <option defaultValue="">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Col>
                                    <div className="col-auto">
                                        <div className="form-check">
                                            <Form.Check type="checkbox" id="autoSizingCheck2" />
                                            <Form.Label htmlFor="autoSizingCheck2">
                                                Remember me
                                            </Form.Label>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <Button type="button" variant="primary">Submit</Button>
                                    </div>
                                </Row>
                            </Form>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <AutoSizing />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AutoSize;