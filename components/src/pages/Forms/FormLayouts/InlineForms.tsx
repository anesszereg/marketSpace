import React from 'react';
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { InlineForms } from './FormLayoutsCode';

const InlineForm = () => {
  return (
    <React.Fragment>
        <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Inline Forms</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>row-cols-*</code> class to set form inline.</p>
                                    <Form action="#">
                                        <Row className="row-cols-lg-auto g-3 align-items-center">
                                            <Col className="col-12">
                                                <Form.Label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</Form.Label>
                                                <InputGroup>
                                                    <div className="input-group-text">@</div>
                                                    <Form.Control type="text" id="inlineFormInputGroupUsername" placeholder="Username" />
                                                </InputGroup>
                                            </Col>
                                            <Col className="col-12">
                                                <Form.Label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</Form.Label>
                                                <Form.Select data-choices data-choices-sorting="true" id="inlineFormSelectPref">
                                                    <option defaultValue="">Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </Col>
                                            <Col className="col-12">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" id="inlineFormCheck" />
                                                    <Form.Label htmlFor="inlineFormCheck">
                                                        Remember me
                                                    </Form.Label>
                                                </div>
                                            </Col>
                                            <div className="col-12">
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
                                        <InlineForms />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
    </React.Fragment>
  )
}

export default InlineForm;