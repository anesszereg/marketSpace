import React from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap';
import { Switches } from './CheckboxRadioCode';

const SwitchesForm = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Switches</h4>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <Col lg={4} md={6}>
                                    <div>
                                        <p className="text-muted fw-medium">Deafult Switchs</p>
                                        <p className="text-muted">Use <code>form-switch</code> class to form-check class to set a switch and add <code>checked</code> attribute to set a switch checked by default.</p>
                                        <div className="form-check form-switch mb-2">
                                            <Form.Check type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            <Form.Label htmlFor="flexSwitchCheckDefault">Default switch input</Form.Label>
                                        </div>

                                        <div className="form-check form-switch">
                                            <Form.Check type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                                            <Form.Label htmlFor="flexSwitchCheckChecked">Checked switch input</Form.Label>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={4} md={6}>
                                    <div className="mt-4 mt-md-0">
                                        <p className="text-muted fw-medium">Disabled Switchs</p>
                                        <p className="text-muted">Use <code>disabled</code> attribute to set a radio button disabled and add <code>checked</code> attribute to set a switch checked by default.</p>
                                        <div className="form-check form-switch mb-2">
                                            <Form.Check type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled />
                                            <Form.Label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Switch input</Form.Label>
                                        </div>

                                        <div className="form-check form-switch">
                                            <Form.Check type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled1" defaultChecked disabled />
                                            <Form.Label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled1">Disabled checked switch input</Form.Label>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6}>
                                    <div className="mt-4 mt-md-0">
                                        <p className="text-muted fw-medium">Switch Right</p>
                                        <p className="text-muted">Use <code>form-check-right</code> class to form-check class to set a switch button on the right side.</p>
                                        <div>
                                            <div className="form-check form-switch form-check-right mb-2">
                                                <Form.Check type="switch" role="switch" id="flexSwitchCheckRightDisabled" defaultChecked />
                                                <Form.Label htmlFor="flexSwitchCheckRightDisabled">Switch Right input</Form.Label>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="form-check form-switch form-check-right">
                                                <Form.Check type="switch" role="switch" id="flexSwitchCheckCheckedDisabled2" disabled />
                                                <Form.Label htmlFor="flexSwitchCheckCheckedDisabled2">Disabled checked switch input</Form.Label>
                                            </div>
                                        </div>

                                    </div>
                                </Col>

                                <Col lg={4} md={6}>
                                    <div className="mt-3">
                                        <p className="text-muted fw-medium">Switch sizes</p>
                                        <p className="text-muted">Use <code>form-switch-md</code> class to set a medium size switch button and <code>form-switch-lg</code> class to form-check class to set a large size switch button respectively. No such class is required for small size switch button.</p>

                                        <div className="form-check form-switch mb-3" dir="ltr">
                                            <Form.Check id="customSwitchsizesm" defaultChecked />
                                            <Form.Label htmlFor="customSwitchsizesm">Small Size Switch</Form.Label>
                                        </div>

                                        <div className="form-check form-switch form-switch-md mb-3" dir="ltr">
                                            <Form.Check id="customSwitchsizemd" />
                                            <Form.Label htmlFor="customSwitchsizemd">Medium Size Switch</Form.Label>
                                        </div>

                                        <div className="form-check form-switch form-switch-lg" dir="ltr">
                                            <Form.Check id="customSwitchsizelg" defaultChecked />
                                            <Form.Label htmlFor="customSwitchsizelg">Large Size Switch</Form.Label>
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
                                <Switches />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SwitchesForm