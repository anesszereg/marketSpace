import React from 'react'
import { Row, Col, Card, InputGroup, Form } from 'react-bootstrap';
import { InputGroupExample } from './BasicElementCode';

const InputGroups = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Input Group</h4>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <h5 className="fs-15">Basic example</h5>
                                <p className="text-muted">Use <code>input-group</code> class to div element which contains input attribute to wrap a default input in the group.</p>
                                <Row className="g-3">
                                    <Col lg={6}>
                                        <InputGroup>
                                            <span className="input-group-text" id="basic-addon1">@</span>
                                            <Form.Control type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <InputGroup>
                                            <Form.Control type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <span className="input-group-text" id="basic-addon2">@example.com</span>
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <InputGroup>
                                            <span className="input-group-text">$</span>
                                            <Form.Control type="text" aria-label="Amount (to the nearest dollar)" />
                                            <span className="input-group-text">.00</span>
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <InputGroup>
                                            <Form.Control type="text" placeholder="Username" aria-label="Username" />
                                            <span className="input-group-text">@</span>
                                            <Form.Control type="text" placeholder="Server" aria-label="Server" />
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <InputGroup>
                                            <span className="input-group-text">With textarea</span>
                                            <textarea className="form-control" aria-label="With textarea" rows={2}></textarea>
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Label htmlFor="basic-url" className="form-label">Your vanity URL</Form.Label>
                                        <InputGroup>
                                            <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                            <Form.Control type="text" id="basic-url" aria-describedby="basic-addon3" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </div>

                            <div className="mt-4">
                                <h5 className="fs-15">Wrapping</h5>
                                <p className="text-muted">Input groups wrap by default via <code>flex-wrap: wrap</code> in order to accommodate custom form field validation within an input group. You may disable this with <code>flex-nowrap</code> class.</p>
                                <div className="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping">@</span>
                                    <Form.Control type="text" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <InputGroupExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default InputGroups;