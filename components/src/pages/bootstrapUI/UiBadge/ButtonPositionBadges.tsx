import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { ButtonPositionBadgesExample, ButtonBadgesExample } from './UiBadgeCode';

const ButtonPositionBadges = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Button Position Badges</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use the below utilities to modify a badge and position it in the corner of a link or button.</p>
                            <div className="d-flex flex-wrap gap-3">
                                <Button color='primary' className="position-relative">
                                    Mails <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">+99
                                        <span className="visually-hidden">unread messages</span></span>
                                </Button>

                                <Button className="btn-light position-relative">
                                    Alerts <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span>
                                </Button>

                                <Button color='primary' className="position-relative p-0 avatar-xs rounded">
                                    <span className="avatar-title bg-transparent">
                                        <i className="bx bxs-envelope"></i>
                                    </span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span>
                                </Button>

                                <Button className="btn-light position-relative p-0 avatar-xs rounded-circle">
                                    <span className="avatar-title bg-transparent text-reset">
                                        <i className="bx bxs-bell"></i>
                                    </span>
                                </Button>

                                <Button className="btn-light position-relative p-0 avatar-xs rounded-circle">
                                    <span className="avatar-title bg-transparent text-reset">
                                        <i className="bx bx-menu"></i>
                                    </span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"><span className="visually-hidden">unread messages</span></span>
                                </Button>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "175px" }}>
                                <ButtonPositionBadgesExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Badges With Button</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Badges can be used as part of buttons to provide a counter.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button color='primary'>
                                    Notifications <span className="badge bg-success ms-1">4</span>
                                </Button>
                                <Button color='success' className="btn-success">
                                    Messages <span className="badge bg-danger ms-1">2</span>
                                </Button>
                                <Button variant="outline-secondary">
                                    Draft <span className="badge bg-success ms-1">2</span>
                                </Button>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "175px" }}>
                                <ButtonBadgesExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ButtonPositionBadges