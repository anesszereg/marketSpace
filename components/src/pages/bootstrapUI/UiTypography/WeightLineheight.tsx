import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontWeightExample, LineHeightExample } from './UiTypographyCode';

const WeightLineheight = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Font weight and italics</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>fst-</code>with modifier class to change font-style and Use <code>fw-</code>with modifier class to change font-weight.</p>
                            <div>
                                <p className="fw-bold">Bold text.</p>
                                <p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
                                <p className="fw-semibold">Semibold weight text.</p>
                                <p className="fw-normal">Normal weight text.</p>
                                <p className="fw-light">Light weight text.</p>
                                <p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
                                <p className="fst-italic">Italic text.</p>
                                <p className="fst-normal mb-0">Text with normal font style</p>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "90px" }}>
                                <FontWeightExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Line height</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>lh-</code> with modifier class to change the line height of an element.</p>
                            <div>
                                <p className="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
                                <p className="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
                                <p className="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.</p>
                                <p className="lh-lg mb-0">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.</p>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "160px" }}>
                                <LineHeightExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default WeightLineheight;