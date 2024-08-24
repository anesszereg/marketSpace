import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { InputExample } from './BasicElementCode';

const InputExamples = () => {
    document.title=" Basic Elements | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Forms" breadcrumbItem="Basic Elements" />
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Input Example</h4>
                            </Card.Header>
                            <Card.Body>
                                <Row className="gy-4">
                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Basic Input</Form.Label>
                                            <Form.Control type="password" id="basiInput" />
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Input with Label</Form.Label>
                                            <Form.Control type="password" id="labelInput" />
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Input with Placeholder</Form.Label>
                                            <Form.Control type="password" id="placeholderInput" placeholder="Placeholder" />
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Input with Value</Form.Label>
                                            <Form.Control type="text" id="valueInput" defaultValue="Input value" />
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Readonly Plain Text Input</Form.Label>
                                            <Form.Control type="text" className="form-control-plaintext" id="readonlyPlaintext" defaultValue="Readonly input" readOnly />
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Readonly Input</Form.Label>
                                            <Form.Control type="text" id="readonlyInput" defaultValue="Readonly input" readOnly />
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Disabled Input</Form.Label>
                                            <Form.Control type="text" id="disabledInput" defaultValue="Disabled input" disabled />
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Input with Icon</Form.Label>
                                            <div className="form-icon">
                                                <Form.Control type="email" className="form-control form-control-icon" id="iconInput" placeholder="example@gmail.com" />
                                                <i className="ri-mail-unread-line"></i>
                                            </div>
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Input with Icon Right</Form.Label>
                                            <div className="form-icon right">
                                                <Form.Control type="email" className="form-control form-control-icon" id="iconrightInput" placeholder="example@gmail.com" />
                                                <i className="ri-mail-unread-line"></i>
                                            </div>
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Input Date</Form.Label>
                                            <Form.Control type="date" id="exampleInputdate" />
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Input Time</Form.Label>
                                            <Form.Control type="time" id="exampleInputtime" />
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Input Password</Form.Label>
                                            <Form.Control type="password" id="exampleInputpassword" defaultValue="44512465" />
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Example Textarea</Form.Label>
                                            <textarea className="form-control" id="exampleFormControlTextarea5" rows={3}></textarea>
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Form Text</Form.Label>
                                            <Form.Control type="password" id="formtextInput" />
                                            <div id="passwordHelpBlock" className="form-text">
                                                Must be 8-20 characters long.
                                            </div>
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Color Picker</Form.Label>
                                            <Form.Control type="color" className="form-control form-control-color w-100" id="colorPicker" defaultValue="#364574" />
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Input Border Style</Form.Label>
                                            <Form.Control type="text" className="form-control border-dashed" id="borderInput" placeholder="Enter your name" />
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Label>Datalist example</Form.Label>
                                        <Form.Select id="datalistOptions" placeholder="Search your country...">
                                            <option value="1">Switzerland</option>
                                            <option value="2">New York</option>
                                            <option value="3">France</option>
                                            <option value="4">Spain</option>
                                            <option value="5">Chicago</option>
                                            <option value="6">Bulgaria</option>
                                            <option value="7">Hong Kong</option>
                                        </Form.Select>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group>
                                            <Form.Label>Rounded Input</Form.Label>
                                            <Form.Control type="text" className="rounded-pill" id="exampleInputrounded" placeholder="Enter your name" />
                                        </Form.Group>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <Form.Group className="form-floating">
                                            <Form.Control placeholder="Enter your firstname" />
                                            <Form.Label htmlFor="firstnamefloatingInput">Floating Input</Form.Label>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "450px" }}>
                                    <InputExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default InputExamples;