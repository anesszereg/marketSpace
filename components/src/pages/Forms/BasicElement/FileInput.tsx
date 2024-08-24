import React from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap';
import { FileInput } from './BasicElementCode';

const FileInputs = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">File Input</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row className="align-items-center g-3">
                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Default File Input Example</Form.Label>
                                        <p className="text-muted">Use <code>input</code> attribute with <code>type="file"</code> tag for default file input</p>
                                        <Form.Control type="file" id="formFile" />
                                    </Form.Group>
                                </Col>
                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Multiple Files Input Example</Form.Label>
                                        <p className="text-muted">Use <code>multiple</code> attribute within the input attribute to select multiple files.</p>
                                        <Form.Control type="file" id="formFileMultiple" multiple />
                                    </Form.Group>
                                </Col>
                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Disabled File Input Example</Form.Label>
                                        <p className="text-muted">Use <code>disabled</code> attribute within the input attribute to disable the file input.</p>
                                        <Form.Control type="file" id="formFileDisabled" disabled />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mt-4 align-items-center g-3">
                                <h5 className="fs-14">File Input Sizing</h5>
                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Small Size File Input Example</Form.Label>
                                        <p className="text-muted">Use <code>form-control-sm</code> class within the form-control class to set a small size file input.</p>
                                        <Form.Control className="form-control-sm" id="formSizeSmall" type="file" />
                                    </Form.Group>
                                </Col>
                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Default Size File Input Example</Form.Label>
                                        <p className="text-muted">Use <code>form-control </code>class and <code>type="file"</code> attribute within the input attribute to set a default size file input.</p>
                                        <Form.Control id="formSizeDefault" type="file" />
                                    </Form.Group>
                                </Col>
                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Large Size File Input Example</Form.Label>
                                        <p className="text-muted">Use <code>form-control-lg</code> class within the form-control class to set a large size file input.</p>

                                        <Form.Control className="form-control-lg" id="formSizeLarge" type="file" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <FileInput />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default FileInputs;