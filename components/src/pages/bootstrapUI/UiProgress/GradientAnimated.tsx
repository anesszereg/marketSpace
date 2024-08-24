import React from 'react';
import { ProgressBar, Row, Col, Card } from 'react-bootstrap';
import { GradientExample, AnimatedExample } from './UiProgressCode';

const GradientAnimated = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Gradient Progress</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>bg-gradient</code> class to show gradient progress bar.</p>
                            <div>
                                <div className="mb-4">
                                    <ProgressBar now={15} />
                                </div>
                                <div className="mb-4">
                                    <ProgressBar variant='success' now={25} />
                                </div>
                                <div className="mb-4">
                                    <ProgressBar variant='info' now={50} />
                                </div>
                                <div className="mb-4">
                                    <ProgressBar variant='warning' now={75} />
                                </div>
                                <div>
                                    <ProgressBar variant='danger' now={100} />
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <GradientExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Animated Progress</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>animated-progress</code> class to show progress with animation.</p>
                            <div>
                                <div className="mb-4">
                                    <ProgressBar animated now={15} />
                                </div>
                                <div className="mb-4">
                                    <ProgressBar animated variant='success' now={25} />
                                </div>
                                <div className="mb-4">
                                    <ProgressBar animated variant='info' now={50} />
                                </div>
                                <div className="mb-4">
                                    <ProgressBar animated variant='warning' now={75} />
                                </div>
                                <div>
                                    <ProgressBar animated variant='danger' now={100} />
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <AnimatedExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default GradientAnimated