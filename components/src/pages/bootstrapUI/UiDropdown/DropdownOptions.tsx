import React from 'react';
import { Card, Col, Dropdown, Row, Button, ButtonGroup } from 'react-bootstrap';
import { OptionDropdownExample } from './UiDropdownCode';

const DropdownOptions = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Dropdown Options</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>data-bs-offset</code> or
                                <code>data-bs-reference</code> to change the position of the dropdown.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary">
                                        Offset
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active>Action</Dropdown.Item>
                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="secondary">Reference</Button>

                                        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <OptionDropdownExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DropdownOptions;