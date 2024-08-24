import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { GradientBadgesExample } from './UiBadgeCode';

const GradientBadges = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Gradient Badges</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">
                                Use the <code>badge-gradient-*</code> class to create a gradient styled badge.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <Badge className="badge-gradient-primary">Primary</Badge>
                                <Badge className="badge-gradient-secondary">Secondary</Badge>
                                <Badge className="badge-gradient-success">Success</Badge>
                                <Badge className="badge-gradient-danger">Danger</Badge>
                                <Badge className="badge-gradient-warning">Warning</Badge>
                                <Badge className="badge-gradient-info">Info</Badge>
                                <Badge className="badge-gradient-dark">Dark</Badge>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "175px" }}>
                                <GradientBadgesExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default GradientBadges