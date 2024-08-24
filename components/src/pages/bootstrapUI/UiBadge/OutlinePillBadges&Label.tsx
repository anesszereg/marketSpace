import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { OutlinePillBadgesExample, LabelBadgesExample } from './UiBadgeCode';

const OutlinePillBadges = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Outline Pill Badges</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">
                                Use the <code>rounded-pill badge-outline-</code> class with the below-mentioned
                                variation to create a outline Pill badge.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge rounded-pill badge-outline-primary">Primary</span>
                                <span className="badge rounded-pill badge-outline-secondary">Secondary</span>
                                <span className="badge rounded-pill badge-outline-success">Success</span>
                                <span className="badge rounded-pill badge-outline-info">Info</span>
                                <span className="badge rounded-pill badge-outline-warning">Warning</span>
                                <span className="badge rounded-pill badge-outline-danger">Danger</span>
                                <span className="badge rounded-pill badge-outline-dark">Dark</span>
                                <span className="badge rounded-pill badge-outline-light text-dark">Light</span>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "175px" }}>
                                <OutlinePillBadgesExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Label Badges</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">
                                Use the <code>badge-label</code> class to create a badge with the label.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <Badge bg='primary' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Primary</Badge>
                                <Badge bg='secondary' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Secondary</Badge>
                                <Badge bg='success' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Success</Badge>
                                <Badge bg='danger' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Danger</Badge>
                                <Badge bg='warning' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Warning</Badge>
                                <Badge bg='info' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Info</Badge>
                                <Badge bg='dark' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Dark</Badge>
                                <Badge bg='light' className="badge-label text-dark"> <i className="mdi mdi-circle-medium"></i> Light</Badge>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "175px" }}>
                                <LabelBadgesExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default OutlinePillBadges;