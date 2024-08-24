import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { RoundSoftBadgesExample, SoftBorderBadgesExample } from './UiBadgeCode';

const RoundedPillsofteffect = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Rounded Pill Badges with soft effect</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use the <code>rounded-pill badge-soft-</code> class with the below-mentioned variation to create a badge more rounded with a soft background.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge rounded-pill badge-soft-primary">Primary</span>
                                <span className="badge rounded-pill badge-soft-secondary">Secondary</span>
                                <span className="badge rounded-pill badge-soft-success">Success</span>
                                <span className="badge rounded-pill badge-soft-info">Info</span>
                                <span className="badge rounded-pill badge-soft-warning">Warning</span>
                                <span className="badge rounded-pill badge-soft-danger">Danger</span>
                                <span className="badge rounded-pill badge-soft-dark">Dark</span>
                                <span className="badge rounded-pill badge-soft-light text-dark">Light</span>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "175px" }}>
                                <RoundSoftBadgesExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Soft Border Badges</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">
                                Use the <code>badge-border</code> and <code>badge-soft-</code> with below
                                mentioned modifier classes to make badges with border & soft backgorund.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge badge-soft-primary badge-border">Primary</span>
                                <span className="badge badge-soft-secondary badge-border">Secondary</span>
                                <span className="badge badge-soft-success badge-border">Success</span>
                                <span className="badge badge-soft-danger badge-border">Danger</span>
                                <span className="badge badge-soft-warning badge-border">Warning</span>
                                <span className="badge badge-soft-info badge-border">Info</span>
                                <span className="badge badge-soft-dark badge-border">Dark</span>
                                <span className="badge badge-soft-light badge-border text-dark">Light</span>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "175px" }}>
                                <SoftBorderBadgesExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default RoundedPillsofteffect