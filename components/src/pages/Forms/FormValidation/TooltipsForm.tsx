import React, { useState } from 'react';
import { Button, Card, Col, Form, Row, InputGroup } from 'react-bootstrap';
import { TooltipsStyles } from './FormValidationCode';

const TooltipsForm = () => {
    const [TooltipsValidated, setTooltipsValidated] = useState<boolean>(false);

    const handleTooltipsSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setTooltipsValidated(true);
    };

    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Tooltips</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">If your form layout allows it, you can swap the <code>.valid | invalid-feedback</code> classes for <code>.valid | invalid-tooltip</code> classes to display validation feedback in a styled tooltip. Be sure to have a parent with <code>position: relative</code> on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.</p>

                            <Form noValidate validated={TooltipsValidated} onSubmit={handleTooltipsSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                            defaultValue="Mark"
                                        />
                                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            defaultValue="Otto"
                                        />
                                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                        <Form.Label>Username</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="Username"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback tooltip type="invalid">
                                                Please choose a username.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" placeholder="City" required />
                                        <Form.Control.Feedback tooltip type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control type="text" placeholder="Choose..." required />
                                        <Form.Control.Feedback tooltip type="invalid">
                                            Please provide a valid state.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control type="text" placeholder="Zip" required />
                                        <Form.Control.Feedback tooltip type="invalid">
                                            Please provide a valid zip.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                    />
                                </Form.Group>
                                <Button type="submit">Submit form</Button>
                            </Form>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <TooltipsStyles />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default TooltipsForm;