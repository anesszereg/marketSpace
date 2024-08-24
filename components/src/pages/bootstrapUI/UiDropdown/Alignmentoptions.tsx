import React from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import { AlignDropdownExample } from './UiDropdownCode';

const Alignmentoptions = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Alignment options</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Dropdown demo with various <code>dropdown alignment</code> options.</p>
                            <div className="d-flex flex-wrap gap-3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary">
                                        Dropdown
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown align='end'>
                                    <Dropdown.Toggle variant="secondary">
                                        Right-aligned menu
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown align='end'>
                                    <Dropdown.Toggle variant="secondary">
                                        Left-aligned, right-aligned lg
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary">
                                        Right-aligned, left-aligned lg
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown drop='start'>
                                    <Dropdown.Toggle variant="secondary">
                                        Dropstart
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown drop='end'>
                                    <Dropdown.Toggle variant="secondary">
                                        Dropend
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown drop='up'>
                                    <Dropdown.Toggle variant="secondary">
                                        Dropup
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <AlignDropdownExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Alignmentoptions