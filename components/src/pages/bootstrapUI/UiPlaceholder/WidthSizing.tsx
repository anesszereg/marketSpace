import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { WidthExample, SizingExample } from './UiPlaceholderCode';

const WidthSizing = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Width</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>w-25,w-50,w-75</code> or <code>w-100</code> class to placeholder class to set different widths to the placeholder.</p>
                            <div>
                                <span className="placeholder w-50"></span>
                                <span className="placeholder w-75"></span>
                                <span className="placeholder w-25"></span>
                                <span className="placeholder w-100"></span>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <WidthExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Sizing</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>placeholder-lg</code>, <code>placeholder-sm</code>, or <code>placeholder-xs</code> class to placeholder class to set different size placeholder.</p>
                            <Row className="gap-0">
                                <div className="col-12">
                                    <span className="placeholder placeholder-lg w-100"></span>
                                </div>
                                <div className="col-12">
                                    <span className="placeholder w-100"></span>
                                </div>
                                <div className="col-12">
                                    <span className="placeholder placeholder-sm w-100"></span>
                                </div>
                                <div className="col-12">
                                    <span className="placeholder placeholder-xs w-100"></span>
                                </div>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "117px" }}>
                                <SizingExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default WidthSizing