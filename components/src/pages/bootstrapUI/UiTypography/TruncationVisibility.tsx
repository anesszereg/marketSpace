import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { TextTruncationExample, VisibilityExample } from './UiTypographyCode';

const TruncationVisibility = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Text Truncation</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>text-truncate</code> class to truncate the text with an ellipsis. Requires <code>display: inline-block</code> or <code>display: block</code>.</p>
                            <div>
                                <Row>
                                    <div className="col-2 text-truncate">
                                        This text is quite long, and will be truncated once displayed.
                                    </div>
                                </Row>

                                <span className="d-inline-block text-truncate" style={{ maxWidth: "150px" }}>
                                    This text is quite long, and will be truncated once displayed.
                                </span>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "100px" }}>
                                <TextTruncationExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Visibility</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>visible</code> or <code>invisible</code> class to show or to hide elements respectively.</p>
                            <div>
                                <div className="visible">text visible Lorem ipsum dolor sit amet</div>
                                <div className="invisible">text invisible Lorem ipsum dolor sit amet</div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "105px" }}>
                                <VisibilityExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default TruncationVisibility