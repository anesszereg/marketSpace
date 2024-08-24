import React from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap';
import { CustomSwitches } from './CheckboxRadioCode';

const FormCustomSwitches = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Custom Switches</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>form-switch-custom</code> class &amp; <code>form-switch-</code> class with below-mentioned color variation to set a color radius.</p>
                            <Row>
                                <Col md={6}>
                                    <div>
                                        <div className="form-check form-switch form-switch-custom form-switch-primary mb-3">
                                            <Form.Check type="checkbox" role="switch" id="SwitchCheck9" defaultChecked />
                                            <Form.Label htmlFor="SwitchCheck9">Switch Primary</Form.Label>
                                        </div>

                                        <div className="form-check form-switch form-switch-custom form-switch-secondary mb-3">
                                            <Form.Check type="checkbox" role="switch" id="SwitchCheck10" defaultChecked />
                                            <Form.Label htmlFor="SwitchCheck10">Switch Secondary</Form.Label>
                                        </div>

                                        <div className="form-check form-switch form-switch-custom form-switch-success mb-3">
                                            <Form.Check type="checkbox" role="switch" id="SwitchCheck11" defaultChecked />
                                            <Form.Label htmlFor="SwitchCheck11">Switch Success</Form.Label>
                                        </div>

                                        <div className="form-check form-switch form-switch-custom form-switch-warning mb-2 mb-md-0">
                                            <Form.Check type="checkbox" role="switch" id="SwitchCheck12" defaultChecked />
                                            <Form.Label htmlFor="SwitchCheck12">Switch Warning</Form.Label>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="mt-4 mt-md-0">
                                        <div className="form-check form-switch form-switch-custom form-switch-danger mb-3">
                                            <Form.Check type="checkbox" role="switch" id="SwitchCheck13" defaultChecked />
                                            <Form.Label htmlFor="SwitchCheck13">Switch Danger</Form.Label>
                                        </div>

                                        <div className="form-check form-switch form-switch-custom form-switch-info mb-3">
                                            <Form.Check type="checkbox" role="switch" id="SwitchCheck14" defaultChecked />
                                            <Form.Label htmlFor="SwitchCheck14">Switch Info</Form.Label>
                                        </div>

                                        <div className="form-check form-switch form-switch-custom form-switch-dark mb-3">
                                            <Form.Check type="checkbox" role="switch" id="SwitchCheck15" defaultChecked />
                                            <Form.Label htmlFor="SwitchCheck15">Switch Dark</Form.Label>
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
                                <CustomSwitches />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default FormCustomSwitches;