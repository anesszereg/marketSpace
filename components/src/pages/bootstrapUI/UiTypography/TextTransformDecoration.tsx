import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TextTransformExample, TextDecrationExample } from './UiTypographyCode';

const TextTransformDecoration = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Text Transform</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>text-lowercase</code>, <code>text-uppercase</code>, or <code>text-capitalize</code> to transform the text.</p>
                            <div>
                                <p className="text-lowercase">Lowercased text.</p>
                                <p className="text-uppercase">Uppercased text.</p>
                                <p className="text-capitalize mb-0">CapiTaliZed text.</p>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "118px" }}>
                                <TextTransformExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Text Decoration</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>text-decoration-underline</code>, <code>text-decoration-line-through</code>, or <code>text-decoration-none</code> class to decorate text in components respectively.</p>
                            <div>
                                <p className="text-decoration-underline">This text has a line underneath it.</p>
                                <p className="text-decoration-line-through">This text has a line going through it.</p>
                                <Link to="#" className="text-decoration-none">This link has its text decoration removed</Link>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <TextDecrationExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default TextTransformDecoration;