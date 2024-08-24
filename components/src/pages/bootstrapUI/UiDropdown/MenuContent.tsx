import React from 'react';
import { Card, Col, Dropdown, Row, Button, Form } from 'react-bootstrap';
import { MenuContentDropdownExample } from './UiDropdownCode';

const MenuContent = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Menu Content</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Example of dropdown menu containing
                                <code>Headers, Text and Forms</code> content.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="primary">
                                        Header
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Header className="noti-title">
                                            <h5 className="font-size-13 text-muted text-truncate mb-0">Welcome Jessie!</h5>
                                        </Dropdown.Header>
                                        <Dropdown.Item href="#" active>Action</Dropdown.Item>
                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown.Toggle variant="success">
                                        Text
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-md p-3">
                                        <p>
                                            Some example text that's free-flowing within the dropdown menu.
                                        </p>
                                        <p className="mb-0">
                                            And this is more example text.
                                        </p>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown.Toggle variant="light">
                                        Forms
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-md p-4">
                                        <Form>
                                            <div className="mb-2">
                                                <Form.Label htmlFor="exampleDropdownFormEmail">Email address</Form.Label>
                                                <Form.Control type="email" className="form-control" id="exampleDropdownFormEmail" placeholder="email@example.com" />
                                            </div>
                                            <div className="mb-2">
                                                <Form.Label htmlFor="exampleDropdownFormPassword">Password</Form.Label>
                                                <Form.Control type="password" className="form-control" id="exampleDropdownFormPassword" placeholder="Password" />
                                            </div>
                                            <div className="mb-2">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" id="rememberdropdownCheck" />
                                                    <Form.Label className="form-check-label" htmlFor="rememberdropdownCheck">Remember me</Form.Label>
                                                </div>
                                            </div>
                                            <Button type="submit" variant="primary">Sign in</Button>
                                        </Form>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <MenuContentDropdownExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default MenuContent;