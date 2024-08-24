import React from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import { DarkDropdownExample } from './UiDropdownCode';

const DarkDropdowns = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Dark Dropdowns</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>dropdown-menu-dark</code> class onto an existing dropdown-menu to create dropdown items dark.</p>
                            <div className="d-flex flex-wrap gap-3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary">
                                        Dropdown button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant='dark'>
                                        <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <DarkDropdownExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DarkDropdowns