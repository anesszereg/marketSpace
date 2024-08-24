import React from 'react';
import { Card, Col, Dropdown, Row, Button, ButtonGroup } from 'react-bootstrap';
import { SizingDropdownExample } from './UiDropdownCode';

const DropdownSizing = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Dropdown Sizing</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>btn-lg</code> class to create a large size dropdown button and <code>btn-sm</code> to create a small size dropdown button.</p>
                            <div className="d-flex flex-wrap gap-3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="primary" size='lg'>
                                        Large Button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="light" size='lg'>Large Split Button</Button>

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
                                    <Dropdown.Toggle variant="primary" size='sm'>
                                        Small Button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="light" size='sm'>Small Split Button</Button>

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
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <SizingDropdownExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DropdownSizing;