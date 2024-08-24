import React from 'react';
import { Card, Col, Dropdown, Row, Button, ButtonGroup } from 'react-bootstrap';
import { SplitButtonDropdownExample } from './UiDropdownCode';

const SplitButtonDropdown = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Split Button Dropdown</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>dropdown-toggle-split</code> to create split button dropdowns as a single button dropdown. </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Dropdown>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="primary">Primary</Button>

                                        <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="success">Success</Button>

                                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="light">Light</Button>

                                        <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="info">Info</Button>

                                        <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="secondary">Secondary</Button>

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

                                <Dropdown>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="warning">Warning</Button>

                                        <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="danger">Danger</Button>

                                        <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="dark">Dark</Button>

                                        <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

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
                                <SplitButtonDropdownExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SplitButtonDropdown