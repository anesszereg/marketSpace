import React from 'react';
import { Card, Col, Form, Row, InputGroup } from 'react-bootstrap';
import { CustomForms } from './BasicElementCode';

const CustomForm = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Custom Forms</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.</p>
                            <div>
                                <h5 className="fs-15 mb-3">Select</h5>
                                <Row className="g-3">
                                    <Col lg={6}>
                                        <InputGroup>
                                            <Form.Label className="input-group-text" htmlFor="inputGroupSelect01">Options</Form.Label>
                                            <Form.Select id="inputGroupSelect01">
                                                <option defaultValue="Choose...">Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <InputGroup>
                                            <Form.Select id="inputGroupSelect02">
                                                <option defaultValue="Choose...">Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                            <Form.Label className="input-group-text" htmlFor="inputGroupSelect02">Options</Form.Label>
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <InputGroup>
                                            <button className="btn btn-outline-primary" type="button">Button</button>
                                            <Form.Select id="inputGroupSelect03" aria-label="Example select with button addon">
                                                <option defaultValue="Choose...">Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <InputGroup>
                                            <Form.Select id="inputGroupSelect04" aria-label="Example select with button addon">
                                                <option defaultValue="Choose...">Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                            <button className="btn btn-outline-secondary" type="button">Button</button>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </div>
                            <div className="mt-4">
                                <h5 className="fs-15 mb-3">File Input</h5>
                                <Row className="g-3">
                                    <Col lg={6}>
                                        <div className="input-group">
                                            <Form.Label className="input-group-text" htmlFor="inputGroupFile01">Upload</Form.Label>
                                            <Form.Control type="file" id="inputGroupFile01" />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="input-group">
                                            <Form.Control type="file" id="inputGroupFile02" />
                                            <Form.Label className="input-group-text" htmlFor="inputGroupFile02">Upload</Form.Label>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="input-group">
                                            <button className="btn btn-outline-primary" type="button" id="inputGroupFileAddon03">Button</button>
                                            <Form.Control type="file" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="input-group">
                                            <Form.Control type="file" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                            <button className="btn btn-outline-success" type="button" id="inputGroupFileAddon04">Button</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <CustomForms />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CustomForm;