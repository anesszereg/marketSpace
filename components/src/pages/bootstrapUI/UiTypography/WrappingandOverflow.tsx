import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { TextWrappingExample, FontSizeExample } from './UiTypographyCode';

const WrappingandOverflow = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Text Wrapping and Overflow</h4>
                        </Card.Header>

                        <Card.Header>
                            <div>
                                <p className="text-muted">Use <code>text-wrap</code> class to wrap the text.</p>
                                <div className="badge bg-primary text-wrap" style={{ width: "6rem" }}>
                                    This text should wrap.
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-muted">Use <code>text-nowrap</code> class to prevent text from wrapping.</p>
                                <div className="text-nowrap border bg-light mt-3" style={{ width: "8rem" }}>
                                    This text should overflow the parent.
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "95px" }}>

                            </pre>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Word Break</h4>
                        </Card.Header>

                        <Card.Body>
                            <div>
                                <p className="text-muted">Use <code>text-break</code> class to prevent long strings of text from breaking your components' layout.</p>
                                <p className="text-break mb-0">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
                            </div>

                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <TextWrappingExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <div className="col-xxl-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title mb-0">Font size</h4>
                        </div>

                        <div className="card-body">
                            <p className="text-muted">Use <code>fs-1</code>, <code>fs-2</code>, <code>fs-3</code>, <code>fs-4</code>, <code>fs-5</code>, or <code>fs-6</code>, class to change the font-size respectively.</p>
                            <div>
                                <p className="fs-1">.fs-1 text</p>
                                <p className="fs-2">.fs-2 text</p>
                                <p className="fs-3">.fs-3 text</p>
                                <p className="fs-4">.fs-4 text</p>
                                <p className="fs-5">.fs-5 text</p>
                                <p className="fs-6">.fs-6 text</p>
                            </div>
                        </div>
                        <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </div>
                        <div className="card-body">
                            <pre className="language-markup">
                                <FontSizeExample />
                            </pre>
                        </div>
                    </div>
                </div>
            </Row>
        </React.Fragment>
    )
}

export default WrappingandOverflow