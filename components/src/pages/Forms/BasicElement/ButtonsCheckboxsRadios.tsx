import React from 'react';
import { Card, Col, Form, Row, InputGroup, Button } from 'react-bootstrap';
import { ButtonsCheckboxesRadiosGroup } from './BasicElementCode';

const ButtonsCheckboxsRadios = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Buttons, Checkboxs and Radios Group</h4>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <p className="text-muted">Use any checkbox, radio, or button option within an input group’s addon instead of text. We recommend adding <code>mt-0</code> class to the <code>form-check-input</code> when there’s no visible text next to the input.</p>
                                <Row className="g-3">
                                    <Col lg={6}>
                                        <InputGroup>
                                            <div className="input-group-text">
                                                <Form.Check className="mt-0" type="checkbox" defaultValue="" aria-label="Checkbox for following text input" />
                                            </div>
                                            <Form.Control type='checkbox' aria-label="Text input with checkbox" />
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <InputGroup>
                                            <div className="input-group-text">
                                                <Form.Check className="mt-0" type="radio" defaultValue="" aria-label="Radio button for following text input" />
                                            </div>
                                            <Form.Control type="radio" aria-label="Text input with radio button" />
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <InputGroup>
                                            <Button variant="outline-primary" id="button-addon1">Button</Button>
                                            <Form.Control type="text" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <InputGroup>
                                            <Form.Control type="text" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <Button variant="outline-success" id="button-addon2">Button</Button>
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <InputGroup>
                                            <Button variant="primary">Button</Button>
                                            <Button variant="success">Button</Button>
                                            <Form.Control type="text" placeholder="" aria-label="Example text with two button addons" />
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <InputGroup>
                                            <Form.Control type="text" aria-label="Recipient's username with two button addons" />
                                            <Button variant="primary">Button</Button>
                                            <Button variant="success">Button</Button>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <ButtonsCheckboxesRadiosGroup />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ButtonsCheckboxsRadios