import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { MenuSize } from './FormSelectCode';

const MenuSizes = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-lg-0">Menu Size</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>multiple</code> attribute to select multiple values and <code>size="your value"</code> attribute to show a number of choice option within a select area. </p>
                            <Row className="gy-4">
                                <Col lg={6}>
                                    <Form.Select multiple aria-label="multiple select example">
                                        <option defaultValue="Open this select menu (multiple select option)">Open this select menu (multiple select option)</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col lg={6}>
                                    <Form.Select aria-label="size 3 select example">
                                        <option defaultValue="Open this select menu (select menu size)">Open this select menu (select menu size)</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        <option value="4">Four</option>
                                        <option value="5">Five</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "250px" }}>
                                <MenuSize />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default MenuSizes;