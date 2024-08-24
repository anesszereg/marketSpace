import React from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import { WidthExample, HeightExample } from './UiUtilityCode'

const WidthHeight = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Width</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>w-25</code>,<code>w-50</code>,<code>w-75</code>,<code>w-100</code> or <code>w-auto</code> class to set width <code>25%</code>, <code>50%</code>, <code>75%</code>, <code>100%</code>, or <code>auto</code> by default respectively.</p>
                            <div>
                                <div className="w-25 p-3 bg-light">Width 25%</div>
                                <div className="w-50 p-3 bg-light">Width 50%</div>
                                <div className="w-75 p-3 bg-light">Width 75%</div>
                                <div className="w-100 p-3 bg-light">Width 100%</div>
                                <div className="w-auto p-3 bg-light">Width auto</div>
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
                            <h4 className="card-title mb-0">Height</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>h-25</code>,<code>h-50</code>,<code>h-75</code>,<code>h-100</code> or <code>h-auto</code> class to set height <code>25%</code>, <code>50%</code>, <code>75%</code>, <code>100%</code>, or <code>auto</code> by default respectively.</p>
                            <Row className="text-center" style={{ height: "255px" }}>
                                <Col>
                                    <div className="h-25 p-3 bg-light">Height25%</div>
                                </Col>
                                <Col>
                                    <div className="h-50 p-3 bg-light">Height 50%</div>
                                </Col>
                                <Col>
                                    <div className="h-75 p-3 bg-light">Height 75%</div>
                                </Col>
                                <Col>
                                    <div className="h-100 p-3 bg-light">Height 100%</div>
                                </Col>
                                <Col>
                                    <div className="h-auto p-3 bg-light">Height auto</div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </div>
                        <div className="card-body">
                            <pre className="language-markup">
                                <HeightExample />
                            </pre>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default WidthHeight