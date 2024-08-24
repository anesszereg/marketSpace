import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BorderButtonsExample } from './UiButtonCode';

const BorderButtons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Border Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Example of simple bottom borderd buttons.</p>
                            <Row>
                                <Col lg={6}>
                                    <div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                        <Button variant='primary' className="btn-border">Primary</Button>
                                        <Button variant='secondary' className="btn-border">Secondary</Button>
                                        <Button variant='success' className="btn-border">Success</Button>
                                        <Button variant='warning' className="btn-border">Warning</Button>
                                        <Button variant='danger' className="btn-border">Danger</Button>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                        <Button variant='outline-primary' className="btn-border">Primary</Button>
                                        <Button variant='outline-secondary' className="btn-border">Secondary</Button>
                                        <Button variant='outline-success' className="btn-border">Success</Button>
                                        <Button variant='soft-warning' className="btn-border">Warning</Button>
                                        <Button variant='soft-danger' className="btn-border">Danger</Button>
                                        <Button variant='soft-dark' className="btn-border">Dark</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <BorderButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BorderButtons