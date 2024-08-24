import React from 'react';
import { ProgressBar, Row, Col, Card } from 'react-bootstrap';
import { CustomExample, CustomProgressExample } from './UiProgressCode';

const Custom = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Custom Progress</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>animated-progress custom-progess </code> class to show custom progress with animation.</p>
                            <div>
                                <div className="mb-4">
                                    <ProgressBar now={15} className="custom-progress" />
                                </div>
                                <div className="mb-4">
                                    <ProgressBar now={25} variant='success' className='custom-progress' />
                                </div>
                                <div className="custom-progress mb-4">
                                    <ProgressBar now={50} variant='info' className='custom-progress' />
                                </div>
                                <div className="mb-4">
                                    <ProgressBar now={75} variant='warning' className='custom-progress' />
                                </div>
                                <div>
                                    <ProgressBar now={100} variant='danger' className='custom-progress' />
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <CustomExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Custom Progress with Label</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use
                                <code>animated-progress custom-progess progress-label</code> class to show
                                custom progress with animation and label.
                            </p>
                            <div>
                                <div className="d-flex align-items-center pb-2 mt-4">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar-xs">
                                            <div className="avatar-title bg-light rounded-circle text-muted fs-16">
                                                <i className="mdi mdi-facebook"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="progress-label">
                                            <div>
                                                <ProgressBar now={15} className='custom-progress' />
                                                <div className="label">15%</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center py-2">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar-xs">
                                            <div className="avatar-title bg-light rounded-circle text-muted fs-16">
                                                <i className="mdi mdi-twitter"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="progress-label">
                                            <div>
                                                <ProgressBar variant='success' now={25} className='custom-progress' />
                                                <div className="label">25%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center py-2">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar-xs">
                                            <div className="avatar-title bg-light rounded-circle text-muted fs-16">
                                                <i className="mdi mdi-github"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="progress-label">
                                            <div>
                                                <ProgressBar variant='info' now={25} className='custom-progress' />
                                                <div className="label">30%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "330px" }}>
                                <CustomProgressExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Custom