import React from 'react';
import { Card, Col, Dropdown, Row, InputGroup, FormControl } from 'react-bootstrap';
import { ButtonsWithDropdowns } from './BasicElementCode';

const Dropdowns = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Buttons with dropdowns</h4>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <p className="text-muted">You can use a button with the dropdown toggle to set the file input group.</p>
                                <Row className="g-3">
                                    <Col lg={6}>
                                        <InputGroup>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="primary">
                                                    Dropdown
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <FormControl type="text" aria-label="Text input with dropdown button" />
                                        </InputGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <InputGroup>
                                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success">
                                                    Dropdown
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </InputGroup>
                                    </Col>
                                    <Col lg={12}>
                                        <InputGroup>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="outline-secondary">
                                                    Dropdown
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons" />
                                            <Dropdown>
                                                <Dropdown.Toggle variant="outline-secondary">
                                                    Dropdown
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
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
                                <ButtonsWithDropdowns />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Dropdowns