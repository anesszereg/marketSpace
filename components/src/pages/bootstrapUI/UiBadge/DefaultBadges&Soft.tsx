import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { DefaultBadgesExample, SoftBadgesExample } from './UiBadgeCode';

const DefaultBadges = () => {
    document.title=" Badges | Toner eCommerce + React Admin Template";
    return (
        <React.Fragment>
            <div className="page">
                    <Breadcrumb breadcrumb="Base UI" breadcrumbItem="Badges" />
                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Default Badges</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use the <code>badge</code> class to set a default badge.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Badge bg='primary' >Primary</Badge>
                                        <Badge bg='secondary' >Secondary</Badge>
                                        <Badge bg='success' >Success</Badge>
                                        <Badge bg='info' >Info</Badge>
                                        <Badge bg='warning' >Warning</Badge>
                                        <Badge bg='danger' >Danger</Badge>
                                        <Badge bg='dark' >Dark</Badge>
                                        <Badge bg='light' >Light</Badge>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "175px" }}>
                                        <DefaultBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Soft Badges</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use the <code>badge-soft-</code> class with the below-mentioned variation to create a softer badge. </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge badge-soft-primary">Primary</span>
                                        <span className="badge badge-soft-secondary">Secondary</span>
                                        <span className="badge badge-soft-success">Success</span>
                                        <span className="badge badge-soft-info">Info</span>
                                        <span className="badge badge-soft-warning">Warning</span>
                                        <span className="badge badge-soft-danger">Danger</span>
                                        <span className="badge badge-soft-dark">Dark</span>
                                        <span className="badge badge-soft-light text-dark">Light</span>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "175px" }}>
                                        <SoftBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </div>
        </React.Fragment>
    )
}

export default DefaultBadges;