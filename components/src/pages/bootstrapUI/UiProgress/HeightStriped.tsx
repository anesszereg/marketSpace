import React from 'react';
import { ProgressBar, Row, Col, Card } from 'react-bootstrap';
import { HeightExample, StripedExample, AnimatedStripedExample } from './UiProgressCode';

const HeightStriped = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Height</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>progress-sm</code>, <code>progress-lg</code>, or
                                <code>progress-xl</code> class to set the different heights of progress.
                            </p>
                            <div>
                                <div className="mb-4">
                                    <h5 className="fs-13">Small Progress</h5>
                                    <div>
                                        <ProgressBar now={25} className="progress-sm" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h5 className="fs-13">Default Progress </h5>
                                    <div>
                                        <ProgressBar variant='success' now={40} />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h5 className="fs-13">Large Progress</h5>
                                    <div>
                                        <ProgressBar variant='warning' now={25} className="progress-lg" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="fs-13">Extra Large Progress</h5>
                                    <div>
                                        <ProgressBar variant='danger' now={25} className="progress-xl" />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <HeightExample />
                            </pre>
                        </Card>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Striped Progress</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>progress-bar-striped</code> class to add strip to the progress.</p>
                            <div>
                                <div className="mb-4">
                                    <ProgressBar striped now={25} />
                                </div>
                                <div>
                                    <ProgressBar variant='success' striped now={40} />
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <StripedExample />
                            </pre>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Animated Striped Progress</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>progress-bar-striped progress-bar-animated</code> class to add strip with animation to the progress.</p>
                            <div>
                                <ProgressBar striped animated now={75} />
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <AnimatedStripedExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default HeightStriped