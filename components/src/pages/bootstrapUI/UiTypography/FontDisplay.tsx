import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';
import { HeadingsExample, DisplayHeadingExample } from './UiTypographyCode';

const FontDisplay = () => {
    document.title=" Typograpgy | Toner eCommerce + React Admin Template";
    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="Typography" />
                <Row>
                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Font Family</h4>
                            </Card.Header>

                            <Card.Body>
                                <Row>
                                    <Col sm={6}>
                                        <div className="text-muted">
                                            <p>Body Font Family</p>
                                            <div>
                                                <p className="display-4 text-dark fw-medium">Aa</p>
                                            </div>
                                            <div>
                                                <p className="mb-2">Font Family</p>
                                                <h5 className="mb-0">"Inter", sans-serif</h5>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col sm={6}>
                                        <div className="text-muted mt-4 mt-sm-0">
                                            <p>Heading Font Family</p>
                                            <div>
                                                <h1 className="display-4 text-dark fw-medium">Aa</h1>
                                            </div>
                                            <div>
                                                <p className="mb-2">Font Family</p>
                                                <h5 className="mb-0">"Inter", sans-serif</h5>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Headings</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</p>
                                <div>
                                    <h1 className="mb-3">h1. Bootstrap heading <small className="text-muted">Semibold 2.03125rem (32.5px)</small></h1>
                                    <h2 className="mb-3">h2. Bootstrap heading <small className="text-muted">Semibold 1.625rem (26px)</small></h2>
                                    <h3 className="mb-3">h3. Bootstrap heading <small className="text-muted">Semibold 1.42188rem (22.8px)</small></h3>
                                    <h4 className="mb-3">h4. Bootstrap heading <small className="text-muted">Semibold 1.21875rem (19.5px)</small></h4>
                                    <h5 className="mb-3">h5. Bootstrap heading <small className="text-muted">Semibold 1.01563rem (16.25px)</small></h5>
                                    <h6 className="mb-1">h6. Bootstrap heading <small className="text-muted">Semibold 0.8125rem (13px)</small></h6>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "233px" }}>
                                    <HeadingsExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Display Headings</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">Traditional heading elements are designed to work best in the meat of your page content.</p>
                                <div>
                                    <h1 className="display-1 mb-4">Display 1</h1>
                                    <h1 className="display-2 mb-4">Display 2</h1>
                                    <h1 className="display-3 mb-4">Display 3</h1>
                                    <h1 className="display-4 mb-4">Display 4</h1>
                                    <h1 className="display-5 mb-4">Display 5</h1>
                                    <h1 className="display-6 mb-0">Display 6</h1>
                                </div>

                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup">
                                    <DisplayHeadingExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default FontDisplay