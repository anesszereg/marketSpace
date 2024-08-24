import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { RadioToggleButtons, OutlinedStyles } from './CheckboxRadioCode';

const RadioToggle = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Radio Toggle Buttons</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Create button-like checkboxes and radio buttons by using <code>btn</code> styles rather than form-check-label class on the &lt;label&gt; elements. These toggle buttons can further be grouped in a <a href="https://getbootstrap.com/docs/5.1/components/button-group/">button group</a> if needed.</p>
                            <div className="hstack gap-2 flex-wrap">
                                <input type="radio" className="btn-check" name="options" id="option1" defaultChecked />
                                <label className="btn btn-secondary" htmlFor="option1">Checked</label>

                                <input type="radio" className="btn-check" name="options" id="option2" />
                                <label className="btn btn-secondary" htmlFor="option2">Radio</label>

                                <input type="radio" className="btn-check" name="options" id="option3" disabled />
                                <label className="btn btn-secondary" htmlFor="option3">Disabled</label>

                                <input type="radio" className="btn-check" name="options" id="option4" />
                                <label className="btn btn-secondary" htmlFor="option4">Radio</label>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "258px" }}>
                                <RadioToggleButtons />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Outlined Styles</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Different variants of <code>btn</code> attribute, such as the various outlined styles, are supported.</p>
                            <div className="hstack gap-2 flex-wrap">
                                <input type="checkbox" className="btn-check" id="btn-check-outlined" />
                                <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">Single toggle</label>

                                <input type="checkbox" className="btn-check" id="btn-check-2-outlined" defaultChecked />
                                <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined">Checked</label>

                                <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" defaultChecked />
                                <label className="btn btn-outline-success" htmlFor="success-outlined">Checked success radio</label>

                                <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" />
                                <label className="btn btn-outline-danger" htmlFor="danger-outlined">Danger radio</label>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <OutlinedStyles />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default RadioToggle;